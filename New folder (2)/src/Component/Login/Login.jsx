import { useFormik } from "formik";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { userContext } from "../UserContext/UserContext";

const Login = () => {
  const { setToken } = useContext(userContext);

  let user = {
    email: "",
    password: "",
  };

  const [yes, setYes] = useState(null);
  const [no, setNo] = useState(null);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  async function dataApi(values) {
    setLoad(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      localStorage.setItem("tkn", data.token);
      setToken(data.token);
      setYes(data.message);
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
      setNo(error.response.data.message);
    }
    setLoad(false);
  }

  const totalFormik = useFormik({
    initialValues: user,
    onSubmit: dataApi,
    validate: function (value) {
      let error = {};

      setYes(null);
      setNo(null);

      if (!value.email.includes("@") || !value.email.includes(".com")) {
        error.email = "email error";
      }

      if (!value.password.match(/^[\w]{5,15}$/)) {
        error.password = "Password must be 5-15";
      }

      return error;
    },
  });

  return (
    <>
      <div className="m-auto w-75 mt-4">
        <h1 className="display-5 fw-bold mb-3">Login Now: </h1>

        {no ? (
          <div className="alert alert-danger">
            Email or Password is incorrect
          </div>
        ) : (
          ""
        )}
        {yes ? <div className="alert alert-success">Welcome User</div> : ""}

        <form onSubmit={totalFormik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            onBlur={totalFormik.handleBlur}
            onChange={totalFormik.handleChange}
            value={totalFormik.values.email}
            id="email"
            type="email"
            className="form-control mb-2"
            placeholder="Email"
          />
          {totalFormik.errors.email && totalFormik.touched.email ? (
            <div className="alert alert-danger">{totalFormik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password:</label>
          <input
            onBlur={totalFormik.handleBlur}
            onChange={totalFormik.handleChange}
            value={totalFormik.values.password}
            id="password"
            type="password"
            className="form-control mb-2"
            placeholder="Password"
          />
          {totalFormik.errors.password && totalFormik.touched.password ? (
            <div className="alert alert-danger">
              {totalFormik.errors.password}
            </div>
          ) : (
            ""
          )}

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={"/forgetpassword"}
                className="text-success"
              >
                forget Password?
              </Link><br />
              <div className="my-2">Don't have account? <Link to={"/register"} style={{ textDecoration:"none" , color:"green" }}>Create Accout Now</Link></div>

            </div>

            <div>
              <button
                type="submit"
                disabled={
                  totalFormik.isValid == false || totalFormik.dirty == false
                }
                className="btn btn-success my-2 d-block ms-auto px-3 py-1 d-flex align-item-center justify-content-center"
              >
                {load ? (
                  <ThreeCircles
                    height="25"
                    width="25"
                    color="black"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
