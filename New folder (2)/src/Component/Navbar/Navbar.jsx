import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate , Link } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import { CartContext } from "../CartContext/CartContext";
import { userContext } from "../UserContext/UserContext";
import "./Navbar.css";


const Navbar = () => {





  const { allCountNumber } = useContext(CartContext);
  const logout = useNavigate();

  function logoutFun() {
    localStorage.removeItem("tkn");

    logout("/login");
  }




  return (
    <>
      <nav className="navbar navbar-expand-md  fixed-top bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand bg-body" to={"/login"}>
            <img src={logo} alt="logo" className="ms-3" style={{width:"200px" }} />
          </NavLink>

          <button
            className="navbar-toggler d-lg-none d-md-none "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{border:"0" , boxShadow:"none"}}
          >
            <i className="fa-solid fa-bars-staggered fs-1 text-success"></i>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              {localStorage.getItem("tkn") ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/home"} aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/cart"} aria-current="page">
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/wishlist"}
                      aria-current="page"
                    >
                      wish list
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/products"}
                      aria-current="page"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/categories"}>
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/brand"}>
                      Brand
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/allorders"}>
                      All Order
                    </NavLink>
                  </li>
                  <li className="nav-item"></li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              {localStorage.getItem("tkn") == null ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      to={"/login"}
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/register"}>
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}

              {localStorage.getItem("tkn") ? (
                <>
                  {" "}
                
             <div className="d-flex">
             <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-facebook fs-6 icon"></i>
        </Link>
        <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-twitter fs-6 icon"></i>
        </Link>
        <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-instagram fs-6 icon"></i>
        </Link>
        <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-tiktok fs-6 icon"></i>
        </Link>
        <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-linkedin fs-6 icon"></i>
        </Link>
        <Link className="nav-link d-inline linkos " to={""}>
          <i className="my-2  fa-brands fa-youtube fs-6 icon"></i>
        </Link>
              </div>       
        




        <li className="nav-item d-flex">
                 
                 <Link className="nav-link" to={"/cart"}>
                   <span className="position-relative">
                     <div type="button" className="position-relative">
                       <i className="fa-solid fa-cart-shopping fs-6 text-success"></i>
                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                         {allCountNumber}
                         <span className="visually-hidden">
                           unread messages
                         </span>
                       </span>
                     </div>
                   </span>
                 </Link>
               </li>
                 
                  <li className="nav-item  logout px-3 py-2">
                    <span style={{ cursor: "pointer" }} onClick={logoutFun} >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                " "
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
