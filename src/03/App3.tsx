import Materiel from "./Matriel";
const MaterielList =[
        {
        nom:'ordi',
        caracteristique:' caracteristique ordi',
        prix:230000,
        img:"ordi.png"
    }
    
]
export default function App() {

    const Materiel= MaterielList.map(function(e,index){
return(
    <div key={index}>
        <h2>Nom: {e.nom}</h2>
        <h2>caracteristique: {e.caracteristique}</h2>
        <h2>prix: {e.prix}</h2>
        img: {e.img}
    </div>
)
    });
return (
    <div>
        <h1>Liste des Materiels</h1>
        {Materiel}
    </div>
 );






    }
