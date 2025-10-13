// Définition du composant Home
// Un composant est une fonction qui retourne du JSX (= du HTML dans du JS)

import logements from "../data/logements.json";
import Banner from "../components/Banner";
import homeBanner from "../assets/banner_home.png";


export default function Home() {
    console.log("nb logements =", logements.length); // doit afficher 20
    
    return ( 
        <>
            <Banner 
                title="Chez vous, partout et ailleurs"
                image={homeBanner}
                alt="Côte rocheuse au bord de la mer"
                titleTag="h1" //titre principal de la page (bannière)
            />
        
        {/* Ici, mettre bientôt la grille de cards générée depuis `logements` */}
        {/* <CardsGrid data={logements} /> */}
     
        </>
    );
}