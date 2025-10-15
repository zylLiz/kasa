import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`accordion ${open ? "is-open" : ""}`}>
      <button className="acc-head" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{title}</span>
        <span className="acc-ico" aria-hidden="true">⌄</span>
      </button>
      <div className="acc-panel">{children}</div>
    </div>
  );
}