import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import OurWork from "./pages/OurWorkPage";
  import WorkDetail from "./pages/WorkDetail";
import Services from "./pages/OurServicesPage";
  import ServiceDetailsPage from "./pages/ServiceDetailPage";
import Packages from "./pages/PackagesPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work/:slug" element={<WorkDetail />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/:serviceUrl" element={<ServiceDetailsPage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

