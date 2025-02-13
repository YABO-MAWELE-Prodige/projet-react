interface props{
    pays:string
    ville:string
}
    export default function Capitale(props:props){
        return (
            <div>
                La capitale de {props.pays} est {props.ville}
            </div>
        )
        
        
    
}