import React, {useState, useEffect, Fragment} from "react";
import ReactDOM from "react-dom";
import { formik, Formik, Form, useField, ErrorMessage } from "Formik";
import * as Yup from "yup";
import { PushSpinner } from "react-spinners-kit";
import store from "../store/index.js";
import FormErrors from "../FormErrors";
import * as actionCreators from "../actionCreators/";


//https://learnetto.com/blog/react-form-validation

    export function Login( props ) {
        console.log( "\nTOP OF SIGNUPFORM", MySubmitButton.blah )
        const [ toggleHidden, setToggleHidden ] = useState( { toggleHidden: true } ) ;
        const [ loading, setLoading ] = useState( { loading: false } );
        const [ inputEmail, setInputEmail ] = useState ( { inputEmail: "" } );
        const [ inputPassword, setInputPassword ] = useState ( { inputPassword: "" } );
        const [ emailValid, setEmailValid ] = useState ( { emailValid: false } );
        const [ passwordValid, setPasswordValid ] = useState ( { passwordValid: false } );
        const [ formValid, setFormValid ] = useState ( { formValid: false } );
        const [ formErrors, setFormErrors ] = useState ( { email: 'aaa', password: 'xxx' } );

                        console.log("LOGIN right after consts formerrors = ", formErrors);

        function dispatchAction( creator, value1 ) {

            console.log( "IN DISPATCHACTION()" );
            console.log(props);
            console.log("\nMySubmitButton props = ", props);

            console.log("BEFORE: store.getState().signedInStatus", store.getState().signedInStatus);

            store.dispatch( creator ( value1 ) ) ;

            console.log("AFTER: store.getState().signedInStatus", store.getState().signedInStatus);

            console.log( "LEAVING DISPATCHACTION()" );

        }

        const MyTextInput = (props={...props} ) => {
            const [fields, meta] = useField(props);
            const handleOnBlur = ( e, props ) => {
            console.log("handleONBlur", e);
            e.preventDefault();
            console.log("handleONBlur", props);
            console.log("handleONBlur", fields, meta);
            console.log("handleONBlur");
            console.log("handleONBlur");
            console.log("handleONBlur");
//                    setInputState({disabled: Object.keys(meta.error).length > 0})
                }

//            const [ field, meta ] = useField( props );
//            console.log( "\nMyTextInput props = ", props );
//            console.log( "MyTextInput props = ", useField( props ) );
//            console.log( "MyTextInput field = ", field );
//            console.log( "MyTextInput meta = ", meta );
//            console.log( "MyTextInput label = ", props.label );
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

        const onSubmit = ( e ) => {
            console.log("onSubmit")
            let jsonObject = createJsonObject( e.target.email.value, e.target.password.value )
            console.log("onSubmit before setLoading loading = ", loading );
            console.log("onSubmit before setLoading loading = ", loading );
            console.log("onSubmit before setLoading loading = ", loading );
            console.log("onSubmit before setLoading loading = ", loading );
            console.log("onSubmit before setLoading loading = ", loading );

            setLoading( true );

            console.log("onSubmit after setLoading loading = ", loading );

            setTimeout(stopSpinner, 1000)
            e.preventDefault();
        }

        const stopSpinner = () => {
            console.log("Stopping spinner")
            setLoading( false )
        }

        function MySubmitButton( props ) {

            console.log(props);
            const [fields, meta] = useField(props);
            console.log("\nMySubmitButton props = ", props);
            console.log("MySubmitButton fields = ", fields);
            console.log("MySubmitButton meta = ", meta);
            console.log("MySubmitButton Object = ", Object);
            console.log("MySubmitButton Object.keys = ", Object.keys);
            console.log("MySubmitButton Object.keys(meta.error) = ", Object.keys(meta.error));
            console.log("MySubmitButton Object.keys(meta.error).length = ", Object.keys(meta.error).length);
            console.log("MySubmitButton  meta.error = ", meta.error);

            return (

                <>
                    <br/><br/>
                    { console.log("MySubmitButton formValid = ", formValid) }
                    <PushSpinner size = { 30 } color="#686769" loading = { false } />
                    <br/>

                    <button type="submit" disabled = { false } >
                        Submit
                    </button>
                </>
            )
        } //MySubMitButton

        const validateField = ( fieldName, value ) => {
            let fieldValidationErrors = formErrors;
                    console.log("top of validateField fieldName = ", fieldName)
                    console.log("top of validateField value = ", value)

//zz
                    console.log("validateField formerrors before = ", formErrors);
            setFormErrors( { email: "bbbbb", password: "aaaaa" } );
                    console.log("validateField formerrors after = ", formErrors);


            switch( fieldName ) {
                case 'email':
                    dispatchAction( actionCreators.saveEmailCreator, value );
                    console.log("validateField emailValid before = ", emailValid);
                    var emailValidityCheckResult = emailValidityCheck(value) ;
                    setEmailValid( emailValidityCheck(value) );
                    console.log("validateField emailValid after = ", emailValid);
                    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                    break;
                case 'password':
                    console.log("case password 1 value.length = ", value.length)
                    console.log("case password  fieldValidationErrors.password = ", fieldValidationErrors.password );
                    console.log("case password  fieldValidationErrors.password.trim().length = ", fieldValidationErrors.password.trim().length );

                    if ( value.length < 6 ) {
                                            console.log("case password 2 value.length = ", value.length)
                        setPasswordValid( false );
                        fieldValidationErrors.password = ' is too short';
                        break;
                    }
                    if ( value.length > 10 ) {
                    console.log("case password 3 value.length = ", value.length)
                        setPasswordValid( false );
                        fieldValidationErrors.password = ' is too long';
                        break;
                    }
                    if ( ! passwordValidityCheck( value ) ) {
                        setPasswordValid( false );
                        fieldValidationErrors.password = ' needs one lower-case, one upper-case, one numeric and one special character';
                        console.log("case password needs one...")
                        break;
                    }
                    passwordValid( true );
                default:
                    break;
            }

            setFormErrors( fieldValidationErrors );
                console.log("validateField bottom formErrors = ", formErrors)
                console.log("validateField bottom fieldValidationErrors = ", fieldValidationErrors)
                console.log("validateField bottom before setEmailValid = ", emailValid)
                setEmailValid( emailValid );
                console.log("validateField after setEmailValid = ", setEmailValid)
                validateForm();
            } //validateField

            function fx( formErrors ) {
                console.log("top of fx");

                return (

                    <div className = 'formErrors' >

                        { console.log("fx formErrors = ", formErrors)}

                        {Object.keys(formErrors).map
                            (
                                ( fieldName, i ) =>
                                    {
                                        if ( formErrors[ fieldName ].length > 0 )
                                        {
                                            return (
                                                <p key = { i } > {fieldName} {formErrors[ fieldName ] } </p>
                                            )
                                        } else  {
                                                    return '';
                                                }
                                    }
                            )
                        }
                    </div>
                )
                console.log("bottom of fx");
                console.log("bottom of fx");
                console.log("bottom of fx");
                console.log("bottom of fx");
    }

            function validateForm() {

                setFormValid( emailValid && passwordValid );

                console.log( "validateForm emailValid = ", emailValid );
                console.log( "validateForm passwordValid = ", passwordValid );
                console.log( "validateForm formValid = ", formValid );
            }

        const handleUserInput = ( e ) => {

            console.log("handleUserInput");
            console.log("handleUserInput");
            console.log("handleUserInput");
            console.log("handleUserInput e.target.name = ", e.target.name);
            console.log("handleUserInput e.target.value = ", e.target.value);
            { e.target.name == "email" ? setInputEmail( e.target.value ) : setInputPassword( e.target.value ) }
            console.log("handleUserInput inputEmail = ", inputEmail);
            console.log("handleUserInput inputPassword = ", inputPassword);

            validateField( e.target.name, e.target.value ) ;
        } //handleUserInput

        return (
            <>
                { console.log("invoking fx() ")}
                { console.log("invoking fx() ")}
                { console.log("invoking fx() ")}
                { console.log("invoking fx() passing in formErrors = ", formErrors)}
                { fx( formErrors ) }

                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                        validateOnMount={true}
                >
                    <form onSubmit={ onSubmit } action="http://localhost:8080/api" method="POST">
                        <div> Email <input type = "email" name = "email" onChange = { ( event ) => handleUserInput( event ) } /> </div>

                        <div> Password <input type="password" name = "password" onChange = { ( event) => handleUserInput( event ) } /> </div>

                        <span onClick = { () => setToggleHidden( { toggleHidden:!toggleHidden } ) } > Toggle </span>

                        <MySubmitButton />

                    </form>
                </Formik>
            </>
        );
    }; //END OF LOGIN

    function passwordValidityCheck( password ) {
        const re = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
                console.log("passwordValidityCheck =  ", re.test( password ) );
        return re.test( password );
    };

    function emailValidityCheck( email ) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                console.log("emailValidityCheck =  ", re.test( email ) );
        return re.test( email );
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

    function App() {
        return <Login parm={this} />;
    }

const rootElement = document.getElementById("root");
export default Login


