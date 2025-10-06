// src/router/AppRouter.jsx
// -> Composant dédié au routage (séparé d'App.jsx)

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout commun (Header + Footer + <Outlet />)
import RootLayout from "../layouts/RootLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

// IMPORTANT : App.jsx ne sera plus rendu, donc on importe ici les styles globaux
import "../App.css";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Toutes les pages "normales" utilisent le layout commun */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />              {/* "/" */}
          <Route path="about" element={<About />} />      {/* "/about" */}
          <Route path="logement/:id" element={<Logement />} />
        </Route>

        {/* 404 pour toute autre URL */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}