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
const Frontend = lazy(() => import('../pages/Frontend'));
const Product = lazy(() => import('../pages/Product'));
const Mobile = lazy(() => import('../pages/Mobile'));
const Ecommerce = lazy(() => import('../pages/Ecommerce'));
const Powerpoint = lazy(() => import('../pages/Powerpoint'));
const Graphics = lazy(() => import('../pages/Graphics'));
const Cyber = lazy(() => import('../pages/Cyber'));
const WebApp = lazy(() => import('../pages/WebApp'));


function AllRoutes() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ui-ux" element={<Ui />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/powerpoint" element={<Powerpoint />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/webapp" element={<WebApp />} />
      </Routes>
  )
}

export default AllRoutes