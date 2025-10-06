// Outlet = l’endroit où s’affichent les "routes enfants".
// Exemple : pour "/" (Home) ou "/about" (About), leur contenu sera rendu à la place de <Outlet />
import { Outlet } from "react-router-dom";

// Composants persistants : on veut voir le Header et le Footer sur TOUTES les pages
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="main">
        {/* Ici s’affichent Home, About, Logement… */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}