
function transform(valeur: number, index: number){
    return(
        <div key={index}> chiffre:{valeur}</div>
    )
}
    function transform2(nom: string, index: number){
    return(
        <div key={index}> Bienvenue à Iklouè {nom}</div>
    )
}
export default function App() {
    
    const data = [1, 2, 3, 4, 5];
    const ListEtudiants=data.map(transform);

    const data2 = ["Alice", "Bob", "Charlie", "David", "Eve"];  
    const bienvenue=data2.map(transform2);
    return (
        <div>
       {ListEtudiants} 
       <hr />
       {bienvenue}
        </div>
    )
}


