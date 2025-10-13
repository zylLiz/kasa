export default function Banner({
  title,
  image,           // image desktop (obligatoire)
  mobileImage,     // image mobile (optionnelle)
  alt = "",
  titleTag = "h1", 
}) {
  const Tag = titleTag;              // h1 | h2 | p...
  const mobileSrc = mobileImage || image; // fallback si pas d’image mobile

  return (
    <section className="banner" aria-label={title || alt}>
      <picture className="banner__media">
        <source media="(max-width: 768px)" srcSet={mobileSrc} />
        <img className="banner__img" src={image} alt={alt} draggable="false" />
      </picture>
      {title && <Tag className="banner__title">{title}</Tag>}
    </section>
  );
}