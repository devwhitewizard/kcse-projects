import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PastProjects from "./pages/PastProjects.jsx";
import Shop from "./pages/Shop.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<PastProjects />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App