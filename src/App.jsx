import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

// Composants
import Header from "./components/Header";
import Footer from "./components/Footer";

//important : importer le CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      {/* zone qui change selon l’URL */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;