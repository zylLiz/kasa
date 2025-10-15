import { useState } from "react";

export default function Carousel({ images = [], alt = "" }) {
  const [i, setI] = useState(0);
  const len = images.length || 1;

  const prev = () => setI((i - 1 + len) % len);
  const next = () => setI((i + 1) % len);

  return (
    <div className="carousel" aria-roledescription="carousel">
      {len > 1 && <button className="car-btn car-btn--prev" onClick={prev} aria-label="Image précédente" />}
      <picture className="carousel__frame">
        <img src={images[i]} alt={alt} />
      </picture>
      {len > 1 && <button className="car-btn car-btn--next" onClick={next} aria-label="Image suivante" />}
      {len > 1 && <div className="car-count">{i+1}/{len}</div>}
    </div>
  );
}