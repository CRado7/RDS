import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import CursorDot from "./components/CursorDot";
import OpacityScroll from "./components/OpacityScroll";
import HomePageAlt from "./pages/HomePage-Alt";
import AboutUs from "./pages/AboutUsPage";
import OurWork from "./pages/OurWorkPage";
import WorkDetail from "./pages/WorkDetail";
import Services from "./pages/OurServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailPage";
import Packages from "./pages/PackagesPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CursorDot />
        <ScrollToTop />
        <OpacityScroll />
        <Routes>
          <Route path="/" element={<HomePageAlt />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/:slug" element={<WorkDetail />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-services/:serviceUrl" element={<ServiceDetailsPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
