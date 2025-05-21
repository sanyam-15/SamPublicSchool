import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Admission from "./components/navlinks/admission";
import Footer from "./components/Core/Footer.jsx";
import ContactPage from "./components/navlinks/contact";
import Gallery from "./components/navlinks/gallery";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Announcement from "./components/Core/anouncement.jsx";
import Faculty from "./components/About Us/Faculty.jsx";
import Infrastructure from "./components/About Us/Infrastructure.jsx";
import About from "./components/About Us/About.jsx";
import StudentGuidelines from "./components/RulesAndRegulations/StudentGuidelines.jsx";
import RulesFeeRules from "./components/RulesAndRegulations/RulesFeeRules.jsx";
import DeveloperInfo from "./pages/DeveloperInfo.jsx";
import AdmissionForm from "./components/Core/AdmissionForm.jsx";
import FeeStructurePage from "./pages/FeeStructure.jsx";
import AdmissionPolicyPage from "./pages/AdmissionPolicy.jsx";
import SchoolProspectus from "./components/About Us/schoolProspectus.jsx";
import VideoGallery from "./pages/videoGAllery.jsx";
import ComingSoon from "./pages/ComingSoonPage.jsx";
import Principal from "./components/About Us/Principal.jsx";
import FixedButton from "./components/Developer/Button.jsx";
import Academic from "./components/Achievements/Academic.jsx";
import Sports from "./components/Achievements/Sports.jsx";
import Class8thTopper from "./components/Achievements/Class8thTopper.jsx";
import Syllabus from "./components/RulesAndRegulations/Syllabus.jsx";
import Transport from "./components/About Us/Transport.jsx";
import Examination from "./components/RulesAndRegulations/ExaminationAndPromotions.jsx";
import VirtualTour from "./components/layout/VirtualTour.jsx";

function AppContent() {
  const location = useLocation().pathname;

  // if (location === "/rules/examination-promotion") {
  //   return <ComingSoon />;
  // }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      {/* <FixedButton  /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/academics" element={<div>Academics Page</div>} />
          <Route path="/admissions/procedure" element={<Admission />} />
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/gallery/images" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/online-fee" element={<NotFoundPage />} />
          <Route path="/about/faculty" element={<Faculty />} />
          <Route path="/about/infrastructure" element={<Infrastructure />} />
          <Route path="/about/transport" element={<Transport />} />
          <Route path="/about/dps-patna" element={<About />} />
          <Route path="/rules/fee-rules" element={<RulesFeeRules />} />
          <Route path="/developer-info" element={<DeveloperInfo />} />
          <Route path="/admissions/admission-form" element={<AdmissionForm />} />
          <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
          <Route path="/admissions/admission-policy" element={<AdmissionPolicyPage />} />
          <Route path="/about/school-prospectus" element={<SchoolProspectus />} />
          <Route path="/about/principal-message" element={<Principal />} />
          <Route path="/gallery/videos" element={<VideoGallery />} />
          <Route path="/rules/guidelines-for-students" element={<StudentGuidelines />} />
          <Route path="/rules/examination-promotion" element={<Examination />} />
          <Route path="/achievements/academics" element={<Academic />} />
          <Route path="/achievements/sports" element={<Sports />} />
          <Route path="/achievements/class-8th-toppers" element={<Class8thTopper />} />
          <Route path="/rules/syllabus" element={<Syllabus />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <div className="fixed bottom-0 left-0 w-full text-white text-center z-50">
        <Announcement />
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
