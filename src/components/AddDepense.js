import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AddDepense = (props) => {
   
    const [amount, setAmount]=useState({
        valeur: 0,
        cause: "",
        acteur: ""
    });


    const submitHandler = (e) => {
        e.preventDefault();
        if(amount.valeur === 0 && amount.cause === "" && amount.acteur === ""){
            alert("All the fields are mandatory");
            return;
        }
        props.addDepenseHandler(amount);
        setAmount({valeur: 0, cause: "", acteur: "" });
}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="number" 
                        name="valeur" 
                        placeholder="valeur" 
                        value={amount.valeur}
                        onChange={(e) => setAmount({...amount, valeur : e.target.value}) } /><br />
                        <input type="text" 
                        name="cause" 
                        placeholder="cause" 
                        value={amount.cause}
                        onChange={(e) => setAmount({...amount, cause : e.target.value}) } /><br />
                        <input type="text" 
                        name="acteur" 
                        placeholder="acteur" 
                        value={amount.acteur}
                        onChange={(e) => setAmount({...amount, acteur : e.target.value}) } /><br />
                        <button type="submit">Submit</button>
            
            </form>
        <Link to="/"> 
        <button>go back to the list</button>
        </Link>
            
        </div>
    )
}

export default AddDepense;
