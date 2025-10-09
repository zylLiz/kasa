import logoWhite from "../assets/logo_white.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container"> {/* <= AJOUT container */}  
        <img className="footer__logo" src={logoWhite} alt="Kasa logo" />
        <p className="footer__copy">© {year} Kasa. All<wbr /> rights reserved </p>
      </div>
    </footer>
  );
}
