import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Posts from "./Posts";
import Service from "./Service";
import Single from "./Single";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<Single />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
