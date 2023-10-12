import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "./product.css";
import { witchListContext } from "../WishList/WitchListContext";
import logo from "../../images/freshcart-logo.svg";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { addWitchList } = useContext(witchListContext);

  const [imgategory, setImgategory] = useState(null);

  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  const { data } = useQuery("products", getProduct, {
    refetchOnMount: false,
  });

  useEffect(() => {
    async function getCategoryImg() {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setImgategory(data.data);
    }
    getCategoryImg();
  }, []);

  async function getIdWitchList(id) {
    const res = await addWitchList(id);
    toast.success("Product added successfully to your wishlist");
  }

  async function getIdAddToCart(id) {
    const res = await addToCart(id);
    if (res.status == "success") {
      toast.success(res.message);
    }
  }

  if (data?.data.data == undefined) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "44vh" }}
      >
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClassName="blocks-wrapper"
        />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 2000,
    arrows: false,
    dots:false
  };
  const settingsf = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 2700,
    arrows: false,
    dots:false
  };

  const settingss = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    duration: 1800,
    stopOnHover: true,
    arrows: false,
    dots:true
  };

  return (
    <>
    
      <Helmet>
        <title>Home</title>
      </Helmet>




 

<div className=" mt-5 p-0 mt-3">
  <div className="row m-0 p-0">
    <div className="col-md-9 m-0 p-0">
        <Slider {...settings}>
          <div className="m-0 p-0">
            <img src={require("../../images/1.jpg")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} />
          </div>
          <div className="m-0 p-0">
             <img src={require("../../images/10.webp")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} />
          </div>
          <div className="m-0 p-0">
            <img src={require("../../images/15.webp")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} />
          </div>
          <div className="m-0 p-0">
           <img src={require("../../images/17.webp")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} />
          </div>
          <div className="m-0 p-0">
            <img src={require("../../images/2.jpg")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} />
          </div>
          <div className="m-0 p-0">
            <img src={require("../../images/41nN4nvKaAL._AC_SY200_.jpg")} className="w-100 p-0 m-0" alt="img" style={{ height:"400px" }} /> 
          </div>
        </Slider>
    </div>
    <div className="col-md-3 m-0 p-0 my-0 py-0">

        <Slider {...settings} className="m-0 p-0">
          <div className="m-0 p-0" style={{ height:"190px" }}>
            <img src={require("../../images/61cSNgtEISL._AC_SY200_ (1).jpg")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
          <div className="m-0 p-0" style={{ height:"190px" }}>
             <img src={require("../../images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
          <div className="m-0 p-0" style={{ height:"190px" }}>
            <img src={require("../../images/slider-image-2.jpeg")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
       
        </Slider>
        <Slider {...settingsf} className="m-0 p-0">
          <div className="m-0 p-0" style={{ height:"190px" }}>
            <img src={require("../../images/slider-image-2.jpeg")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
          <div className="m-0 p-0" style={{ height:"190px" }}>
             <img src={require("../../images/1.jpg")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
          <div className="m-0 p-0" style={{ height:"190px" }}>
            <img src={require("../../images/10.webp")} className="w-100 m-0 p-0" alt="img" style={{ height:"197px" }} />
          </div>
       
        </Slider>
      
    </div>
  </div>
</div>




      <Slider {...settingss}>
        {imgategory?.map(function (elm, idx) {
          return (
            <div key={idx}>
              <div>
                <img
                  src={elm.image}
                  alt="slider-img-small"
                  style={{ height: "180px" }}
                  className="w-100"
                />
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="container">
        <div className="row g-4 mt-5 p-0 ">
          {data?.data.data.map(function (elm, idx) {
            return (
              <div
                key={idx}
                className="col-md-3 mt-5 position-relative main"
                style={{ overflow: "hidden" }}
              >
                <Link
                  to={`/productdetails/${elm.id}`}
                  className="cardo "
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={elm.imageCover}
                    alt="img"
                    className="w-100 mt-3 "
                    style={{ height: "280px", borderRadius: "10px" }}
                  />
                  <div className="text-success">{elm.category.name}</div>
                  <p className="text-dark" style={{ whiteSpace: "nowrap" }}>
                    {elm.title.split(" ").slice(0, 2).join(" ")}
                  </p>

                  <div className="d-flex justify-content-between align-item-center">
                    <div className="text-black">{elm.price} EGP</div>
                    <div className="text-muted">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "gold" }}
                      ></i>
                      {elm.ratingsAverage}
                    </div>
                  </div>
                </Link>
                <div
                  className="d-block text-end heartList position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    getIdWitchList(elm.id);
                  }}
                >
                  <i className="fa-solid fa-heart fs-5"></i>
                </div>
                <br />
                <br />
                <br />
                <div className="m-auto">
                  <button
                    className="btn text-white w-75 buto m-auto"
                    onClick={() => getIdAddToCart(elm.id)}
                    style={{ backgroundColor: "green" }}
                  >
                    + Add Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
