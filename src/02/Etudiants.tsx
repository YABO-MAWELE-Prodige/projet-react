interface props{
    nom: string
    prenom: string
    age:number
}
export default function Etudiants(props:props)
{
    return (
        <div>
            nom  : <strong> {props.nom} </strong><br/>
            prenom: <strong>{props.prenom} </strong><br/>
            age: <strong>{props.age} </strong><br/>

            
        </div>
    )

    
}