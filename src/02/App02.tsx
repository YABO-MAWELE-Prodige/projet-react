import Capitale from "./Capitale"
import Etudiants from "./Etudiants"
import Bienvenue from "./Bienvenue"
export default function App02(){
    // jsx ineface utiisateur: / Balises html
    return(
        <div>

         <h3> Capitale</h3>
            <Capitale pays="RCA" ville="Bangui" />
            <Capitale pays="Senegal" ville="Dakar" />
            <Capitale pays="Fance" ville="Paris" />

            <h3> Etudiants </h3>
            <Etudiants nom="YABO" prenom="Prodige" age={43}/>
            <Etudiants nom="BAGANKE" prenom="Le grand Demetruis" age={93}/>

            <h3> Etudiants </h3>

            <Bienvenue name="Karis" lang="fr"/>
        </div>

        
    )
}