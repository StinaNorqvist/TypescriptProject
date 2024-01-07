import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Login(): JSX.Element {
  return (
    <>
      <Header />
      <h1>Login</h1>
      <Link to={"/signup"}>Sign Up</Link>
    </>
  );
}
export default Login;
