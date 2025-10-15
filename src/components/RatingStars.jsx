export default function RatingStars({
  value = 0, size = 36, gap = 8,
  color = "#FF6060", empty = "#C4C4C4", ariaLabel = "Note"
}) {
  const n = Math.max(0, Math.min(5, Number(value)));
  const stars = Array.from({ length: 5 }, (_, i) => i < n);

  return (
    <div
      className="rating"
      role="img"
      aria-label={`${ariaLabel}: ${n} sur 5`}
      style={{
        "--star-size": `${size}px`,
        "--star-gap": `${gap}px`,
        "--star-full": color,
        "--star-empty": empty
      }}
    >
      {stars.map((full, idx) => (
        <svg
          key={idx}
          className={`star ${full ? "is-full" : "is-empty"}`}
          viewBox="0 0 24 24"
          aria-hidden="true"     // <- important pour ne pas doubler la lecture
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}