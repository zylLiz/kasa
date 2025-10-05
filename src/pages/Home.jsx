// Définition du composant Home
// Un composant est une fonction qui retourne du JSX (= du HTML dans du JS)

import logements from "../data/logements.json";

function Home() {
    console.log("nb logements =", logements.length); // doit afficher 20
    return ( 
     // Ici on met du contenu simple pour l’instant
    // Plus tard, on affichera la liste des logements depuis le JSON
    <h1>Page d'accueil</h1>
    );
}
// On exporte le composant Home pour l'utiliser dans App.jsx
export default Home;