import { useState } from "react";

export default function Accordion({ title, children, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`acc ${className} ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="acc__btn"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="acc__title">{title}</span>
        {/* L’icône est purement décorative, donc aria-hidden */}
        <span className="acc__icon" aria-hidden="true" />
      </button>

      <div className="acc__panel" hidden={!open}>
        {children}
      </div>
    </section>
  );
}