//composant Error
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/" className="error__link" aria-label="Retour à l'accueil">Retourner sur la page d’accueil</Link>
    </section>
  );
}