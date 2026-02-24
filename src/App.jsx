import './App.css'
import { useLocation } from 'react-router-dom';
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

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App