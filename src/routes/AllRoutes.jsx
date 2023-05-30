import React from 'react'
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Story = lazy(() => import("../pages/Story"));
const Services = lazy(() => import("../pages/Services"));
const Career = lazy(() => import("../pages/Career"));
const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Ui = lazy(() => import("../pages/Ui"));

function AllRoutes() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ui-ux" element={<Ui />} />
        </Routes>
    </>
  )
}

export default AllRoutes