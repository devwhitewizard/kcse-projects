import './App.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PastProjects from "./pages/PastProjects.jsx";
import Shop from "./pages/Shop.jsx";
import Terms from "./pages/Terms.jsx";

function App() {
  const location = useLocation();

  const renderPage = () => {
    switch(location.pathname) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/projects':
        return <PastProjects />;
      case '/shop':
        return <Shop />;
      case '/terms':
        return <Terms />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    // Ensure each route navigation starts at top of page
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App