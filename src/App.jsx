import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Admission from './components/navlinks/admission';
import Footer from "./components/Core/Footer.jsx";
import ContactPage from './components/navlinks/contact'; 
import Gallery from './components/navlinks/gallery'; 
import NotFoundPage from './pages/NotFoundPage.jsx';
import Announcement from './components/Core/anouncement.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="pt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<div>Academics Page</div>} />
              <Route path="/admissions/procedure" element={<Admission/>} />
              <Route path="/events" element={<div>Events Page</div>} />
              <Route path="/gallery/images" element={<Gallery/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/online-fee" element={<NotFoundPage/>} />
            </Routes>
          </div>
          <Footer/>
          <div className="fixed bottom-0 left-0 w-full text-white text-cente z-50">
        <Announcement />
      </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;