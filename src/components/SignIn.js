import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./signInValidation";
import "../styles/SignIn.css";
import axios from "axios";

export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8080/signin", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
   
      <div className="signIn d-flex justify-content-center align-item-center  my-2 ">
        <div className=" bg-primary  p-3">
          <h2 className="p-2 text-light ">Login</h2>
          <p className="p-2 text-white ">
            Get access to your Orders, <br />
            Wishlist and Recommendations
          </p>
        </div>
        <div className="bg-white p-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Enter Email/Mobile Number</strong>
              </label>
              <input
                type="email "
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0 "
              ></input>
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password "
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              ></input>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Sign In
            </button>
            <p className="text-secondary p-1">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <Link to="/SignUp" className=" text-decoration-none">
              New to Flipkart? Create an account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
