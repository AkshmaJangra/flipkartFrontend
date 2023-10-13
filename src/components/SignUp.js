import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Validation from "./signInValidation";
import axios from "axios";
import "../styles/SignUp.css";
export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
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
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8080/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="signUp d-flex justify-content-center align-item-center my-2 ">
       <div className=" bg-primary  p-3">
          <h2 className="p-2 text-light ">Looks like you're new here!</h2>
          <p className="p-2 text-white ">
          Sign up with your mobile number to get started
          </p>
        </div>
      <div className="bg-white p-5 ">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="name "
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              className="form-control rounded-0"
            ></input>
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email "
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            ></input>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Create Password</strong>
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
            Sign Up
          </button>
          <p className="text-secondary p-1" >  By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.</p>
         
        </form>
      </div>
    </div>
  );
}
