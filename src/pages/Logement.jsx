//Composant Logement
// Cette page est dynamique : elle s’affiche en fonction de l’ID du logement
// affichera les infos du logement correspondant
import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Carousel from "../components/Carousel";
import RatingStars from "../components/RatingStars";
import Accordion from "../components/Accordion";

export default function Logement() {
  const { id } = useParams();
  const item = data.find(l => l.id === id);

  // IMPORTANT : rediriger vers 404 si l'id n'existe pas
  if (!item) return <Navigate to="/404" replace />;

  const { title, location, pictures, tags, host, rating, description, equipments } = item;

return (
     <section className="logement">
      <Carousel images={pictures} alt={title} />

      <header className="lodg-head">
        <div className="lodg-head__left">
          <h1 className="lodg-title">{title}</h1>
          <p className="lodg-city">{location}</p>

          <ul className="tags">
            {tags.map(t => <li key={t} className="tag">{t}</li>)}
          </ul>
        </div>

        <div className="lodg-head__right">
          <div className="host">
            <div className="host__name">{host.name}</div>
            <img className="host__pic" src={host.picture} alt={host.name} />
          </div>
          <RatingStars value={Number(rating)} />
        </div>
      </header>

        <div className="lodg-details">
        <Accordion title="Description">
          <p>{description}</p>
        </Accordion>
        <Accordion title="Équipements">
          <ul className="equip-list">
            {equipments.map((e,i) => <li key={i}>{e}</li>)}
          </ul>
        </Accordion>
      </div>
    </section>
  );
}