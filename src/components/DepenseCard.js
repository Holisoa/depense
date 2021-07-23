import React from 'react'

const DepenseCard = (props) => {
    const {id, valeur, cause, acteur} = props.depense;
    return (
       <div className="item">
           <div className="content">
                <div className="header">{valeur}    <i className="money bill alternate outline icon"></i></div>
                <div>POUR RAISON DE {cause} par {acteur}</div>
           </div>
           
           <i 
            className="trash alternate outline icon"
           style={{color: 'red', marginTop: "7px"}}
           onClick={() => props.clickHandler(id)}
           ></i>
           <i 
            className="pencil alternate icon"
            onClick={() => props.updateHandler(id)}
           ></i>
       </div>
    )
}

export default DepenseCard
