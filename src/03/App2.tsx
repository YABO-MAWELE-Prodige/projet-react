import Etudiants from "../02/Etudiants";
const EtudiantList =[
        {
        nom:'jhon',
        age:20,
        tel:43444
    },
    {
        nom:'sophie',
        age:22,
        tel:67890
    }
]
export default function App() {

    const Etudiants=EtudiantList.map(function(e,index){
return(
    <div key={index}>
        <h2>Nom: {e.nom}</h2>
        <h2>Age: {e.age}</h2>
        <h2>Tel: {e.tel}</h2>
    </div>
)
    });
return (
    <div>
        <h1>Liste des étudiants</h1>
        {Etudiants}
    </div>
 );






    }
