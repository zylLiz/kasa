// On importe NavLink pour naviguer sans recharger la page,
// et pour pouvoir marquer le lien "actif" automatiquement
import { NavLink, Link } from "react-router-dom";
import logoDesktop from "../assets/logo_desktop.svg";
import logoMobile from "../assets/logo_mobile.svg";

function Header() {
    return (
      //Le header englobe la barre du haut
      <header className="header">
        {/* Conteneur interne pour aligner logo + menu */}
        <div className="header__inner">
          <Link to="/" className="header__logo-link" aria-label="Kasa, retour à l'accueil">
            <picture>
              <source media="(max-width: 768px)" srcSet={logoMobile} />
              <img 
                src={logoDesktop}
                alt="Kasa"
                className="header__logo"
              />
            </picture>
          </Link>

          {/* Navigation principale */}
          <nav className="nav" aria-label="Navigation principale">
            {/* NavLink reçoit une fonction pour ajouter la classe --active si l'URL correspond */}
            <NavLink
              to="/"
              end // "end" pour que "/" ne soit pas actif sur /about, etc.
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")}
            >
              Accueil
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")}
            >
            À propos
            </NavLink>
          </nav>
        </div>
      </header>
  );
}

export default Header;
