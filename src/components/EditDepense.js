import React , { useState } from 'react'

const EditDepense = (props) => {
    console.log(props.location.state.depense)
    const {id, valeur, cause, acteur} = props.location.state.depense;
    const [amount, setAmount]=useState({
        id: "",
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
        console.log(props.location.state.depense.id);
        setAmount({...amount, id :  props.location.state.depense.id});
        console.log(amount);
        //props.updateDepense(amount);
        //setAmount({valeur: "", cause:"", acteur:""});
        //props.history.push("/");
}
    return (
        <div>
            <h1>hello from editform</h1>


            <form onSubmit={submitHandler}>
                <input type="number" 
                        name="valeur" 
                        placeholder="valeur" 
                        defaultValue={valeur}
                        onChange={(e) => setAmount({...amount, valeur :  e.target.value}) } /><br />
                        <input type="text" 
                        name="cause" 
                        placeholder="cause" 
                        defaultValue={cause}
                        onChange={(e) => setAmount({...amount, cause :  e.target.value}) } /><br />
                        <input type="text" 
                        name="acteur" 
                        placeholder="acteur" 
                        defaultValue={acteur}
                        onChange={(e) => setAmount({...amount, acteur :  e.target.value}) } /><br />
                        <button type="submit">Submit</button>
            
            </form>
        </div>
    )
}

export default EditDepense
