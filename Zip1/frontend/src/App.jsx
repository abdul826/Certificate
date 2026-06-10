import { Routes, Route } from "react-router-dom";

/* ✅ Navbar */
import Navbar from "./components/Navbar";

/* ✅ WEBSITE */
import Home from "./pages/Hero";
import Services from "./pages/Services";
import Skills from "./pages/skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

/* ✅ ADMIN LAYOUT */
import AdminLayout from "./admin/AdminLayout";

/* ✅ ADMIN MAIN */
import Dashboard from "./admin/Dashboard";

/* ✅ SKILLS */
import SkillsAdmin from "./admin/skills/SkillsAdmin";
import AddSkill from "./admin/skills/AddSkill";
import EditSkill from "./admin/skills/EditSkill";

/* ✅ PORTFOLIO */
import PortfolioAdmin from "./admin/portfolio/PortfolioAdmin";
import AddPortfolio from "./admin/portfolio/AddPortfolio";
import EditPortfolio from "./admin/portfolio/EditPortfolio";

/* ✅ SERVICES */
import ServicesAdmin from "./admin/services/ServicesAdmin";
import AddService from "./admin/services/AddService";
import EditService from "./admin/services/EditService";

/* ✅ TESTIMONIAL */
import TestimonialAdmin from "./admin/testimonial/TestimonialAdmin";
import AddTestimonial from "./admin/testimonial/AddTestimonial";
import EditTestimonial from "./admin/testimonial/EditTestimonial";

/* ✅ CV */
import CVAdmin from "./admin/cv/CVAdmin";

/* Admin Login */
import AdminLogin from "./admin/AdminLogin";

/* Toaster */
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
    <Navbar />
    <Routes>

      {/* ✅ WEBSITE ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />

      {/* ================================================= */}
      {/* ✅ ADMIN ROUTES */}
      {/* ================================================= */}

      {/* ✅ DASHBOARD */}
      <Route
        path="/admin"
        element={<AdminLayout><Dashboard /></AdminLayout>}
      />

      {/* ✅ SKILLS */}
      <Route
        path="/admin/skills"
        element={<AdminLayout><SkillsAdmin /></AdminLayout>}
      />
      <Route
        path="/admin/skills/add"
        element={<AdminLayout><AddSkill /></AdminLayout>}
      />
      <Route
        path="/admin/skills/edit/:id"
        element={<AdminLayout><EditSkill /></AdminLayout>}
      />

      {/* ✅ PORTFOLIO */}
      <Route
        path="/admin/portfolio"
        element={<AdminLayout><PortfolioAdmin /></AdminLayout>}
      />
      <Route
        path="/admin/portfolio/add"
        element={<AdminLayout><AddPortfolio /></AdminLayout>}
      />
      <Route
        path="/admin/portfolio/edit/:id"
        element={<AdminLayout><EditPortfolio /></AdminLayout>}
      />

      {/* ✅ SERVICES */}
      <Route
        path="/admin/services"
        element={<AdminLayout><ServicesAdmin /></AdminLayout>}
      />
      <Route
        path="/admin/services/add"
        element={<AdminLayout><AddService /></AdminLayout>}
      />
      <Route
        path="/admin/services/edit/:id"
        element={<AdminLayout><EditService /></AdminLayout>}
      />

      {/* ✅ TESTIMONIAL */}
      <Route
        path="/admin/testimonial"
        element={<AdminLayout><TestimonialAdmin /></AdminLayout>}
      />
      <Route
        path="/admin/testimonial/add"
        element={<AdminLayout><AddTestimonial /></AdminLayout>}
      />
      <Route
        path="/admin/testimonial/edit/:id"
        element={<AdminLayout><EditTestimonial /></AdminLayout>}
      />

      {/* ✅ CV */}
      <Route
        path="/admin/cv"
        element={<AdminLayout><CVAdmin /></AdminLayout>}
      />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

    </Routes>
    <Toaster position="top-right" />
    </>
  );
}

export default App;
