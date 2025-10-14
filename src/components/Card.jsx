import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link" aria-label={title}>
        <img className="card__img" src={cover} alt={title} loading="lazy" decoding="async" />
        <span className="card__title">{title}</span>
      </Link>
    </article>
  );
}