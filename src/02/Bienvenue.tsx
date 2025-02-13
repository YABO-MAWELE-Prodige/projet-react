interface Props{
    lang?: string
    name: string
}
export default function Bienvenue(props:Props){
    // jsx ineface utiisateur: / Balises html
    if (props.lang ==='fr'){
    return(
        <div>
         Bienenue<strong> {props.name}</strong>
          
        </div>
    )
    return(
        <div>
         Welcome<strong> {props.name}</strong>
          
        </div>
    )
}
}