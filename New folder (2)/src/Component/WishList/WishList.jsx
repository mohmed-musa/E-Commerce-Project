import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { witchListContext } from "./WitchListContext";
import { Blocks } from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CartContext } from "../CartContext/CartContext";

const WishList = () => {
  const { displayWitch, displayWitchList , removeWishList} = useContext(witchListContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    displayWitchList();
    removeWishList();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 1800,
    stopOnHover: true,
    arrows: false,
  };

  if (displayWitch == null) {
    return (
      <h1
        className="text-center d-flex align-items-center justify-content-center"
        style={{ minHeight: "44vh" }}
      >
        You don't have any Product...
      </h1>
    );
  }

  async function getId(id) {
    const res = await addToCart(id);
    console.log(res);
    return res
  }

  async function getIdRem(ido) {
    const resDel = await removeWishList(ido);
    displayWitchList();

    return resDel
  }


  return (
    <>
      <Helmet>
        <title>wish list</title>
      </Helmet>

      <div className="container my-5 bg-light p-0">
        <div className="py-4 display-6 my-3 bg-success text-center fw-bold text-white" style={{ borderRadius:"10px" ,filter:"drop-shadow(0 0 4px black)"}}>
          My Wish List
        </div>
        {displayWitch?.data.map(function (elm, idx) {
      
          return (
            <div
              key={idx}
              className="row justify-content-start align-items-center"
            >
              <div className="col-md-2">
                <Slider {...settings}>
                  {elm?.images.map(function (elmTwo, idxTwo) {
                    return (
                      <div key={idxTwo}>
                        <div>
                          <img
                            src={
                              "https://res.cloudinary.com/dwp0imlbj/image/upload/v1680747398/Route-Academy-products/" +
                              elmTwo
                            }
                            alt="img"
                            className="w-100"
                            style={{ borderRadius: "10px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="col-md-3 text-start ">
                <div className="fs-4 text-success fw-bold">
                  {elm.category.name}
                </div>
                <div className="fs-5 fw-bold ">
                  {elm.title.split(" ").slice(0, 2).join(" ")}
                </div>
                <p className="fs-5 text-muted ">{elm.price} EGP</p>
                <button className="btn btn-outline-danger" onClick={() => {
                    getIdRem(elm.id);
                  }}>Remove</button>
              </div>
              <div className="col-md-2 offset-5">
                <button
                  className="btn btn-success"
                  style={{ transition: ".5s" }}
                  onClick={() => {
                    getId(elm.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <hr />{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishList;
