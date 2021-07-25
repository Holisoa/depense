import React from 'react';
import { Link } from "react-router-dom";

const DetailDepense = (props) => {
   
    const {id, valeur, cause, acteur} = props.location.state.depense;
    return (
        <div>
            <h1>hello</h1>
            <h1>la somme d'argent est : {valeur}</h1><br/>
            <h2>cause de sortie : {cause}</h2><br/>
            <h3>la personne qui a retiré l'argent est : {acteur}</h3><br/>
            <Link to="/">
                <button>go back to the list</button>
            </Link>
        </div>
    )
}

export default DetailDepense
