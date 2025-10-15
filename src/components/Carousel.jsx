import { useState } from "react";

export default function Carousel({ images = [], alt = "" }) {
  const [i, setI] = useState(0);
  const many = images.length > 1;

  const prev = () => many && setI((n) => (n - 1 + images.length) % images.length);
  const next = () => many && setI((n) => (n + 1) % images.length);

  return (
    <section className="carousel" aria-label={alt || "Galerie"}>
      <div className="carousel__frame">
        <img
          src={images[i]}
          alt={alt ? `${alt} — image ${i + 1} sur ${images.length}` : `Image ${i + 1}`}
          draggable={false}
        />
      </div>

      {many && (
        <>
          <button
            type="button"
            className="car-btn car-btn--prev"
            onClick={prev}
            aria-label="Image précédente"
          />
          <button
            type="button"
            className="car-btn car-btn--next"
            onClick={next}
            aria-label="Image suivante"
          />
          <div className="car-count" aria-hidden="true">
            {i + 1}/{images.length}
          </div>
        </>
      )}
    </section>
  );
}