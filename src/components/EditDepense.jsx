import React from 'react';


const EditDepense = () => {
  return (
    <div>
      <form>
                <input type="number" 
                        name="valeur" 
                        placeholder="valeur" 
                       // value={amount.valeur}
                       // onChange={(e) => setAmount({...amount, valeur : e.target.value}) }
                        /><br />
                        <input type="text" 
                        name="cause" 
                        placeholder="cause" 
                       //value={amount.cause}
                        //onChange={(e) => setAmount({...amount, cause : e.target.value}) }
                         /><br />
                        <input type="text" 
                        name="acteur" 
                        placeholder="acteur" 
                       // value={amount.acteur}
                        //onChange={(e) => setAmount({...amount, acteur : e.target.value}) }
                         /><br />
                        <button type="submit">Submit</button>
            
            </form>
    </div>
  )
}

export default EditDepense
