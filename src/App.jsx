import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import { lazy, Suspense } from "react";
import "./styles/Home.scss";
import "./styles/Navbar.scss";
import "./styles/Story.scss";
import "./styles/Services.scss";
import "./styles/Career.scss";
import "./styles/Portfolio.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";

const Home = lazy(() => import("./components/Home"));
const Story = lazy(() => import("./components/Story"));
const Services = lazy(() => import("./components/Services"));
const Career = lazy(() => import("./components/Career"));
const Contact = lazy(() => import("./components/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio"));


function App() {

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div id="loader"></div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
