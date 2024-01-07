import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ILogin } from "../interfaces/interfaces";

function Login(): JSX.Element {
  const [success, setSuccess] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);

  const initialValues = {
    useremail: "",
    userpassword: "",
  };

  const validationSchema = Yup.object().shape({
    useremail: Yup.string()
      .matches(
        /^[a-zA-Z0-9-äöåÄÖÅ_.+-]+@[a-zA-Z0-9-äöåÄÖÅ]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email address"
      )
      .required("Email is required"),
    userpassword: Yup.string().required("Password is required"),
  });

  const handleLogin = (values: ILogin) => {
    console.log(values.useremail, values.userpassword, "Input values");

    const options = {
      method: "POST",
      body: JSON.stringify({
        useremail: values.useremail,
        userpassword: values.userpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/api/login", options)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setFail(false);
        } else {
          setSuccess(false);
          setFail(true);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setSuccess(false);
        setFail(true);
      });
  };

  return (
    <>
      <Header />
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <label htmlFor="useremail">Email</label>
            <div>
              <Field
                id="userEmail"
                type="text"
                name="useremail"
                placeholder="Email"
              ></Field>
              {errors.useremail && touched.useremail && (
                <p className="errors">{errors.useremail}</p>
              )}
            </div>

            <label htmlFor="userpassword">Password</label>
            <div>
              <Field
                id="userPassword"
                type="password"
                name="userpassword"
                placeholder="Password"
              ></Field>
              {errors.userpassword && touched.userpassword && (
                <p className="errors">{errors.userpassword}</p>
              )}
            </div>

            <div className="buttonDiv">
              <button id="loginButton" type="submit" disabled={!isValid}>
                Log in
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {success ? (
        <p id="loginSuccessful">Login was successful!</p>
      ) : fail ? (
        <p id="loginUnsuccessful">Login failed. Please try again.</p>
      ) : (
        <p id="message">Login please</p>
      )}

      <Link to={"/signup"}>Sign Up</Link>
    </>
  );
}
export default Login;
