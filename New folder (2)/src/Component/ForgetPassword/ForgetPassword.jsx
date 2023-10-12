import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";

const ForgetPassword = () => {
  const {
    resetCode,
    setResetCode,
    forgetPassword,
    setValueInput,
    getCode,
    dataFor,
    setData,
    errorFor,
    coding,
    setCoding,
    errorCode,
    successCode,
  } = useContext(userContext);

  const navigate = useNavigate();

  const [valinpo, setValinpo] = useState("");
  const [valinpoo, setValinpoo] = useState("");

  if (successCode?.status === "Success") {
    setTimeout(() => {
      navigate("/updatepassword");
    }, 2000);
  }

  return (
    <>
      <br />
      <div className="total d-flex justify-content-center flex-column align-items-center">
        <div className="card my-5 p-4 w-50">
          <form
            onSubmit={function (e) {
              e.preventDefault();
            }}
          >
            <div className="w-100">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control w-100"
                id="email"
                placeholder="Enter Your Email"
                onChange={(e) => {setValueInput(e.target.value)
                  setValinpo(e.target.value)}
                
                }
                required
              />
              {dataFor?.statusMsg === "success" ? (
                <p className="alert alert-success mt-2"> {dataFor?.message}</p>
              ) : (
                <p className="fs-5 mt-2">Please enter valid email</p>
              )}

              <div className="text-success mt-2 "></div>
              <button
                className="btn btn-success mt-1 w-100"
                onClick={(e) => {
                  forgetPassword();
                }}
                disabled={valinpo.length < 15}
              >
                Reset
              </button>
            </div>
          </form>
          <br />

          <form
            onSubmit={function (e) {
              e.preventDefault();
            }}
          >
            <div className="containerp-5 rounded-3">
              <label className="label-control mb-3">
                Enter your Reset code :
              </label>
              <input
                type="number"
                className="form-control w-100"
                placeholder="Enter Code...."
                onChange={function (e) {
                  setCoding(e.target.value);
                  setValinpoo(e.target.value)
                }}
                required
              />
              <br />
              <button
                className="btn btn-success w-100"
                onClick={(e) => {
                  getCode(coding);
                  
                }}
                disabled={valinpoo.length < 4 }
              >
                Send
              </button>

              {successCode?.status == "Success" ? (
                <p className="alert alert-success mt-2">
                  {successCode?.status}
                </p>
              ) : (
                <h6 className="mt-3 fs-5"> Please enter valid Code has sent to your email </h6>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
