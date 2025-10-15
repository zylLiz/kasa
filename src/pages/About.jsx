//Composant About
import Accordion from "../components/Accordion";

const ITEMS = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale..." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa..." },
  { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous accompagner..." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs..." },
];

export default function About() {
    return (
    <main className="about" aria-labelledby="about-title">

      <section
        className="about-banner"
        role="img"
        aria-label="Bannière À propos"
      />

      <section className="about-list">
        {ITEMS.map(i => (
          <Accordion key={i.title} title={i.title}>
            <p>{i.content}</p>
          </Accordion>
        ))}
      </section>
    </main>
  );
}