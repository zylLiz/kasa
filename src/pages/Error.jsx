//composant Error
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); }, []);
  return (
    <section
      className="error"
      aria-labelledby="err-title"
      tabIndex={-1}
      ref={ref}
    >
      <h1 id="err-title" className="error__code">404</h1>
      <p className="error__text">Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/" className="error__link" aria-label="Retour à l'accueil">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}