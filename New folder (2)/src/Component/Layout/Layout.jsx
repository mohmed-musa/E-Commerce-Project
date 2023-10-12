import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import RouteProvider from "../RouteProvider/ProtectedRoute";
import { userContext } from "../UserContext/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartContext, CartContextProvider } from "../CartContext/CartContext";
import { WitchListProvider, witchListContext } from "../WishList/WitchListContext";

const Layout = () => {
// const {WitchListProvider} = useContext(witchListContext)

  const client = new QueryClient()



  return (
    <>
    <QueryClientProvider client={client}>
      <WitchListProvider>
      <Navbar />
      <Outlet />
      
      <Footer />
      </WitchListProvider>
      </QueryClientProvider>

    </>
  );
};

export default Layout;
