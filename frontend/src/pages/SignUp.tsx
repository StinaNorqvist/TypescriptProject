import React from "react";
import Header from "../components/Header";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { IUser } from "../interfaces/interfaces";

function SignUp(): JSX.Element {
  const initialValues = {
    username: "",
    useremail: "",
    userpassword: "",
    useraddress: "",
    userzipcode: "",
    usercity: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    useremail: Yup.string()
      .matches(
        /^[a-zA-Z0-9-äöåÄÖÅ_.+-]+@[a-zA-Z0-9-äöåÄÖÅ]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email address"
      )
      .required("Email is required"),
    userpassword: Yup.string().required("Password is required"),
    useraddress: Yup.string().required("Address is required"),
    userzipcode: Yup.string()
      .matches(/^[0-9]{5}$/, "Invalid zip code")
      .required("Zip code is required"),
    usercity: Yup.string().required("City is required"),
  });

  const handleNewUser = (values: IUser) => {
    console.log(values, "Input values");

    const options = {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        useremail: values.useremail,
        userpassword: values.userpassword,
        useraddress: values.useraddress,
        userzipcode: values.userzipcode,
        usercity: values.usercity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/api/users", options).then((res) => {
      res.json().then((data) => {
        console.log(data, "New user added");
      });
    });
  };

  return (
    <>
      <Header />
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleNewUser}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <label htmlFor="username">Name</label>
            <div>
              <Field
                id="userName"
                type="text"
                name="username"
                placeholder="Name"
              ></Field>
              {errors.username && touched.username && (
                <p className="errors">{errors.username}</p>
              )}
            </div>

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

            <label htmlFor="useraddress">Address</label>
            <div>
              <Field
                id="userAddress"
                type="text"
                name="useraddress"
                placeholder="Address"
              ></Field>
              {errors.useraddress && touched.useraddress && (
                <p className="errors">{errors.useraddress}</p>
              )}
            </div>

            <label htmlFor="userzipcode">Zip Code</label>
            <div>
              <Field
                id="userZipCode"
                type="text"
                name="userzipcode"
                placeholder="Zip Code"
              ></Field>
              {errors.userzipcode && touched.userzipcode && (
                <p className="errors">{errors.userzipcode}</p>
              )}
            </div>

            <label htmlFor="usercity">City</label>
            <div>
              <Field
                id="userCity"
                type="text"
                name="usercity"
                placeholder="City"
              ></Field>
              {errors.usercity && touched.usercity && (
                <p className="errors">{errors.usercity}</p>
              )}
            </div>

            <div className="buttonDiv">
              <button id="signUpButton" type="submit" disabled={!isValid}>
                Sign up
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Link to={"/login"}>Log in</Link>
    </>
  );
}
export default SignUp;
