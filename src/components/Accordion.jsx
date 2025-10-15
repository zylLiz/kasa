import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`acc ${open ? "is-open" : ""}`}>
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
    </div>
  );
}