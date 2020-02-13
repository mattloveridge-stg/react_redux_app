import React, {useState} from "react";
import ReactDOM from "react-dom";
import { formik, Formik, Form, useField, ErrorMessage } from "Formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

      const MySubmitButton = ({ ...props }) => {
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
              <div><br/><button disabled={Object.keys(meta.error).length > 0} type="submit">Submit</button></div>
          )
      }

    // And now we can use these
    const SignupForm = ( ) => {
      console.log("\nTOP OF SIGNUPFORM", MySubmitButton.blah)
      const [state, setState] = useState({toggleHidden:true});

      const MyTextInput = ({ label, ...props }) => {
          // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
          // which we can spread on <input> and also replace ErrorMessage entirely.
          const [field, meta] = useField(props);
          console.log("\nMyTextInput props = ", props);
          console.log("MyTextInput props = ", useField(props));
          console.log("MyTextInput field = ", field);
          console.log("MyTextInput meta = ", meta);
          console.log("MyTextInput label = ", label);
          return (
            <>
              { props.name }
              <input className="text-input" {...field} {...props} />
              {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
              ) : null}
            </>
          );
        };

    const handleSubmit = ( e ) => {
            console.log("----Calling on submit!----");
            let jsonObject = createJsonObject( e.target.email.value, e.target.password.value )
                        console.log("jsonObject = ", jsonObject);
                        console.log("jsonObject = ", jsonObject);
                        console.log("jsonObject = ", jsonObject);
                        console.log("jsonObject = ", jsonObject);
                        console.log("jsonObject = ", jsonObject);
                        console.log("jsonObject = ", jsonObject);
        }

      return (
        <>
          <h1>Subscribe!</h1>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email addresss")
                .required("Required"),
              password: Yup.string()
                .required("Required")
                .min(6, 'Password is too short - should be 6 chars minimum.')
                .max(10, 'Password is too long - should not be more than 10 chars.')
                .matches(/[a-z]/, 'Password must contain at least one lower-case letter')
                .matches(/[A-Z]/, 'Password must contain at least one capital letter')
                .matches(/[0-9]/, 'Password must contain at least one digit')

            })}
            validateOnMount={true}
            onSubmit= { handleSubmit(e) }
          >
            <Form>

              <MyTextInput
                name="email"
                type="text"
                placeholder="abc@def.com"
                onBlur={()=>{console.log("email blur",state)}}
              />

              <MyTextInput name="password" onBlur={()=>{console.log("password blur", state)}} type={state.toggleHidden ? "password" : "text"} className="form-control rounded-0" placeholder="myPassword"/>
              <span onClick={() => setState({ toggleHidden:!state.toggleHidden})}>Toggle</span>

              <MySubmitButton> Submit </MySubmitButton>

            </Form>
          </Formik>
        </>
      );
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
      return <SignupForm parm={this} />;
    }
const rootElement = document.getElementById("root");
export default SignupForm
