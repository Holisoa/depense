import React from 'react'
import { Link } from 'react-router-dom';

const DepenseCard = (props) => {
    const updateEvent = () => {
        return <a>link</a>
        
    }
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
            
            onClick={() =>  updateEvent()}
           ></i>
       </div>
    )
}

export default DepenseCard
