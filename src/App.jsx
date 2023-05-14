import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import { lazy, Suspense } from "react";
import "./styles/Home.scss";
import "./styles/Navbar.scss";
import "./styles/Services.scss";
import "./styles/Portfolio.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";

const Home = lazy(() => import("./components/Home"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio"));

function App() {

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div id="loader"></div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
