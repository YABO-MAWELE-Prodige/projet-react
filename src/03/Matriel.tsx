interface props{
    nom: string
    caracteristique: string
    prix:number
    img:string

}
export default function Materiel(props:props)
{
    return (
        <div>
            nom  : <strong> {props.nom} </strong><br/>
            caracteristique: <strong>{props.caracteristique} </strong><br/>
            prix: <strong>{props.prix} </strong><br/>
            img:<img src={props.img} width={10}

            
        </div>
    )

    
}