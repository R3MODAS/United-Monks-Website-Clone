import AllRoutes from "./routes/AllRoutes";
import ScrollToTop from "./components/ScrolltoTop";
import { Suspense } from "react";
import "./styles/Home.scss";
import "./styles/Navbar.scss";
import "./styles/Story.scss";
import "./styles/Services.scss";
import "./styles/Career.scss";
import "./styles/Portfolio.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";
import "./styles/Ui.scss";
import "./styles/Frontend.scss";
import "./styles/Product.scss";
import "./styles/Mobile.scss";
import "./styles/Ecommerce.scss";
import "./styles/Powerpoint.scss";
import "./styles/Graphics.scss";
import "./styles/Cyber.scss";
import "./styles/WebApp.scss";

function App() {

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div id="loader"></div>}>
        <AllRoutes />
      </Suspense>
    </>
  )
}

export default App
