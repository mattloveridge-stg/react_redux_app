import React, {useState} from "react";
import store from "../store/index.js";
import dispatchAction from "../dispatchAction";
import * as actionTypes from "../actionType/ActionType";
import { PushSpinner } from "react-spinners-kit";
import Loader from 'react-loader-spinner'
import { useField } from "Formik";
import { Formik } from "Formik";
import FormErrors from "../FormErrors";
import App from "../App";
import { Navigation } from "../App";
import Search from "./Search";
import { withRouter, Redirect } from "react-router-dom";

//https://learnetto.com/blog/react-form-validation

    export function Login( props ) {

        console.log("\nTOP OF LOGIN");
        const [ toggleHidden, setToggleHidden ] = useState( { toggleHidden: false } ) ;
        const [ inputEmail, setInputEmail ] = useState ( { inputEmail: "" } );
        const [ inputPassword, setInputPassword ] = useState ( { inputPassword: "" } );
        const [ loadingVar, setLoadingVar ] = useState ( { loadingVar: false } );
        const [ loggedIn, setLoggedIn ] = useState ( { loggedIn: false } );
        const [ spinning, setSpinning ] = useState( { spinning: false } );

        const MySubmitButton = ( props ) => {

            const handleOnClick = ( e, props ) => {

            }
            return (
                <>
                    <br/>
                    <button type="submit"
                        onClick = { handleOnClick }
                        disabled = { ! store.getState().formValidity } >
                        Submit
                    </button>
                </>
            )
        } //MySubMitButton

        const MyTextInput = (props={...props} ) => {  //<<<<<<<<<<<  NOT USED ANYMORE
            const [fields, meta] = useField(props);
            const handleOnBlur = ( e, props ) => {
                console.log("handleONBlur", e);
                e.preventDefault();
                console.log("handleONBlur", props);
                console.log("handleONBlur", fields, meta);
            }
            return (
              <>
                { props.name }
                <input className="text-input" {...props} onBlur={handleOnBlur} />
                {meta.touched && meta.error ? (
                  <div className="error">{meta.error}</div>
                ) : null}
              </>
            );
        };

        const onSubmit = ( e ) => { //preventDefault isn't working if both input fields are empty

            processValidForm();

            if ( ! ( inputEmail == undefined || inputPassword == undefined ) ) {
                let jsonObject = createJsonObject( inputEmail, inputPassword )
                console.log("onSubmit      jsonObject = ", jsonObject);
            }
            e.preventDefault();
        }

        const stopSpinner = () => {
            console.log("Stopping spinner");
            setLoadingVar( false );//can't rely on this state hook
            console.log( "stopSpinner      store.getState() 7 before = ", store.getState() );
            dispatchAction( actionTypes.SET_SPINNING_AT, false ); //need to provide the spinner a subscription
            console.log( "stopSpinner      store.getState() 7 after   = ", store.getState() );
        }

        const validateEmail = ( value ) => {
            console.log("validateEmail method ------------------------------------");
            console.log("validateEmail method      BEFORE dispatch : store.getState() ", store.getState() );
            console.log("validateEmail method      hardcode emailValidity to true"  );

            if ( ! emailValidityCheck( value ) ) {
                dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_EMAIL_AT, "Email is invalid" );
                console.log("validateEmail      email is not valid store.getState() after first dispatch = ",
                    store.getState() );
                dispatchAction( actionTypes.SET_EMAIL_VALIDITY_AT, false );
                dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, false );
                return;
            }

            dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_EMAIL_AT, "" );
            dispatchAction( actionTypes.SET_EMAIL_VALIDITY_AT, true );
            console.log("validateEmail      email is valid store.getState() after first dispatch = ",
                store.getState() );

            if ( store.getState().passwordValidity ) dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, true );
        }

        const validatePassword = ( value ) => {
                console.log("validatePassword method ------------------------------------");
                console.log("validatePassword      store.getState() = ", store.getState());

                if ( value.length < 6 ) {
                    dispatchAction( actionTypes.SET_PASSWORD_VALIDITY_AT, false );
                    dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, false );
                    dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT, "Password is too short" );
                    console.log("validatePassword < 6       AT BOTTOM       store.getState() = ",
                        store.getState());
                    return;
                }
                if ( value.length > 10 ) {
                    console.log("validatePassword      value.length = ", value.length)
                    dispatchAction( actionTypes.SET_PASSWORD_VALIDITY_AT, false );
                    dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, false );
                    dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT, "Password is too long" );
                    return;
                }
                if ( ! passwordValidityCheck( value ) ) {
                    dispatchAction( actionTypes.SET_PASSWORD_VALIDITY_AT, false );
                    dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, false );
                    dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT,
                        "Password needs one lower-case, one upper-case, one numeric and one special character" );
                    console.log("validatePassword     case password needs one...")
                    return;
                }

                if ( store.getState().emailValidity ) dispatchAction(actionTypes.SET_FORM_VALIDITY_AT, true );

                dispatchAction( actionTypes.SET_PASSWORD_VALIDITY_AT, true );
                dispatchAction( actionTypes.SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT, "" );
                console.log("validatePassword     bottom state = ", store.getState());
        }

        const validateField = ( fieldName, value ) => {
            switch( fieldName ) {
                case 'emailName': validateEmail( value ); break;
                case 'passwordName': validatePassword( value ); break;
                default: break;
            }
        }

        const processValidForm = (  ) => {
            //the email and password have to be valid, otherwise the submit button is disabled

            dispatchAction( actionTypes.SET_FORM_VALIDITY_AT, true );
            dispatchAction(actionTypes.SET_LOGGEDIN_STATUS_AT, true);

            console.log("onSubmit     inputEmail = ", inputEmail);
            console.log("onSubmit     inputPassword = ", inputPassword);
            console.log("onSubmit      spinning state hook before = ", spinning );
            console.log("onSubmit      set setSpinning to true" );
            setSpinning( true );
            console.log("onSubmit      spinning state hook after ", spinning );// state hook doesn't work
            console.log("onSubmit      loading state hook before = ", loadingVar );
            console.log("onSubmit      set setloading to true" );
            setLoadingVar( true );
            console.log("onSubmit      spinning state hook after ", loadingVar );// state hook doesn't work
            console.log("onSubmit      store.getState() before = ", store.getState() );
            console.log("onSubmit      set store Spinning to true");
            dispatchAction( actionTypes.SET_SPINNING_AT, true);
            console.log("onSubmit      store.getState() after = ", store.getState() );//<<<<< STORE UPDATE WORKED
            console.log("setting TIMEOUT");
            setTimeout(stopSpinner, 2000);

//let history = createBrowserHistory()
//render(<Router history={history}>{routes}</Router>, el)

//    const { match, location, history } = props;
//    return <div>You are now at {location.pathname}</div>;

//            props.history.push('/Search');

            Navigation(); //<<<<<<<<<<<< NOT WORKING;  from App; should show all the links in the nav bar

            return < Redirect to = '/Search' />  //<<<<<<<<<<<<< NOT WORKING

        }

        const handleUserInput = ( e ) => {
            e.target.name == "emailName" ? setInputEmail( e.target.value ) :
                setInputPassword( e.target.value );
            validateField( e.target.name, e.target.value ) ;
        }

//---------------------------------  FORM

        const messages = [{ messageText: store.getState().saveFieldValidationErrorsEmail },
            { messageText: store.getState().saveFieldValidationErrorsPassword }];

        console.log( "\nABOVE FORM       spinning = ", spinning );
        console.log("FORM      store.getState() = ", store.getState());

        return (
            <>
                <div>
                    {console.log( "PRECEDING FORMERRORS     messages = ", messages ) }
                    <FormErrors messages = { messages } />
                </div>

                <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                    validateOnMount={true}
                >
                    <form onSubmit={ onSubmit } action="http://localhost:8080/api" method="POST">

                        <div> Email <input type = "email" name = "emailName" onChange = { ( event ) => handleUserInput( event ) } /> </div>

                        <div> Password <input type="password" name = "passwordName" onChange = { ( event) => handleUserInput( event ) }
                            type = { toggleHidden ? "password" : "text" } />
                            <span onClick = { ( ) => { setToggleHidden( !toggleHidden ) } } > Toggle </span>
                        </div>

                        < PushSpinner size = { 30 } color="#686769" loading = { store.getState().spinning } />

                        <MySubmitButton />

                    </form>
                </Formik>
            </>
        );
    }; //END OF LOGIN

    function emailValidityCheck( email ) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log("emailValidityCheck      re.test( email ) = ", re.test( email ));
        return re.test( email );
    };

    function passwordValidityCheck( password ) {
        console.log("passwordValidityCheck      password = ", password);
        const re = /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
                console.log("\npasswordValidityCheck =  ", re.test( password ) );
        console.log("passwordValidityCheck      re.test( password ) = ", re.test( password ));
        return re.test( password );
    };

    function createJsonObject( email, password ) {
        let jsonObject = "{ ";
        jsonObject += "email: ";
        jsonObject += email;
        jsonObject += ", ";
        jsonObject += "password: ";
        jsonObject += password;
        jsonObject += " }";
        console.log("jsonObject = ", jsonObject);
        console.log("jsonObject = ", jsonObject);
        console.log("jsonObject = ", jsonObject);
        console.log("jsonObject = ", jsonObject);
        console.log("jsonObject = ", jsonObject);
        console.log("jsonObject = ", jsonObject);
        return jsonObject;
    }

const rootElement = document.getElementById("root");
export default Login
