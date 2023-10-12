
import "./App.css";
import logo from './images/freshcart-logo.svg';
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Register from "./Component/Register/Register";
import Error from "./Component/Error/Error";
import Login from "./Component/Login/Login";
import Brand from "./Component/Brand/Brand";
import Categories from "./Component/Categories/Categories";
import Chart from "./Component/Chart/Chart";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import { UserProvider } from "./Component/UserContext/UserContext";
import ProtectedRoute from "./Component/RouteProvider/ProtectedRoute";
import Product from "./Component/Product/Product";
import {CartContext,CartContextProvider}from "./Component/CartContext/CartContext";
import { Toaster } from "react-hot-toast";
import BrandsDetails from "./Component/Brand/BrandsDetails";
import Payment from "./Component/Payment/Payment";
import AllOrder from "./Component/AllOrder/AllOrder";
import { Offline, Online } from "react-detect-offline";
import ForgetPassword from "./Component/ForgetPassword/ForgetPassword";
import WishList from "./Component/WishList/WishList";
import ProSearch from "./Component/prosearch/ProSearch";
import EnterCode from "./Component/ForgetPassword/UpdatePassword";
import UpdatePassword from "./Component/ForgetPassword/UpdatePassword";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index:true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brand",
          element: (
            <ProtectedRoute>
              <Brand />
            </ProtectedRoute>
          ),
        },
        
        {
          path: "productdetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "forgetpassword",
          element: (
            
              <ForgetPassword />
           
          ),
        },
        {
          path: "updatepassword",
          element: (
            
              <UpdatePassword />
           
          ),
        },
        {
          path: "brandsdetails/:id",
          element: (
            <ProtectedRoute>
              <BrandsDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "updatepassword",
          element: (
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Chart />
            </ProtectedRoute>
          ),
        },
        {
          path: "payment",
          element: (
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <ProSearch />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <AllOrder />
            </ProtectedRoute>
          ),
        },
        
        {
          path: "*",
          element: (
            <ProtectedRoute>
              <Error />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <>
      <Online>
        <CartContextProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </CartContextProvider>
      </Online>
      <Offline>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img
            src={require("./images/no-internet-removebg-preview.png")}
            alt="img"
            className="noInternet w-50"
          />
        </div>
      </Offline>
      <Toaster />
    </>
  
};

export default App;
