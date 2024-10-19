import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";

// import  useCookie  from 'react-use-cookie';

const Layout = () => {

const [token] = useCookie("my_token");

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <main className=" flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
