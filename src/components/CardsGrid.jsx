import Card from "./Card";

export default function CardsGrid({ data = [] }) {
  if (!data.length) return null;
  return (
    <section className="cards-section" aria-label="Liste des logements">
      <div className="cards">
        {data.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </section>
  );
}