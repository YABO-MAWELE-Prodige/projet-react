import { useState } from "react";
export default function  App(){
   const [compteur, setcompteur]=useState(46);
    function augmenter(){
        //compteurt=coçmpteur+1;
        setcompteur(compteur+1);
    }

    function diminuer(){
        //compteurt=coçmpteur+1;
        setcompteur(compteur-1);
    }
return(
<div>
    <button onClick={augmenter}>  +</button>
    <button onClick={diminuer}>   -</button>
    <div> compteur {compteur}: </div>
    </div>
)


}