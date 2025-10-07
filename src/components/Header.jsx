// On importe NavLink pour naviguer sans recharger la page,
// et pour pouvoir marquer le lien "actif" automatiquement
import { NavLink } from "react-router-dom";

function Header() {
    return (
        //Le header englobe la barre du haut
        <header className="header">
            {/* Conteneur interne pour aligner logo + menu */}
            <div className="header_inner">
              {/* Logo temporaire texte (on mettra l'image Figma plus tard) */}  
              <div className="header_logo">Kasa</div>
              {/* Navigation principale */}
        <nav className="header__nav">
          {/* NavLink reçoit une fonction pour ajouter la classe --active si l'URL correspond */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            end // "end" pour que "/" ne soit pas actif sur /about, etc.
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
