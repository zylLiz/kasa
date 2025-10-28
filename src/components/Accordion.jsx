import { useState, useId } from "react";

export default function Accordion({ title, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className={`acc ${className} ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="acc__btn"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="acc__title">{title}</span>
        <span className="acc__icon" aria-hidden="true" />
      </button>

      {/* IMPORTANT : ne pas utiliser hidden ici, sinon l’animation CSS ne s’exécute pas */}
      {/* ARIA : région contrôlée par le bouton */}
      <div
        id={panelId}
        className="acc__panel"
        role="region"          
        aria-hidden={!open}    
      >
        <div className="acc__inner">
          <div className="acc__content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}