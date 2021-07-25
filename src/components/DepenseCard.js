import React from 'react'
import { Link } from 'react-router-dom';

const DepenseCard = (props) => {

    const {id, valeur, cause, acteur} = props.depense;
    return (
       <div className="item">
           <div className="content">
               
               <Link
                to={{
                pathname: `/depense/${id}`,
                state: { depense: props.depense }
                }}
                >

                    <div className="header">{valeur}    <i className="money bill alternate outline icon"></i></div>
                    <div>POUR RAISON DE {cause} par {acteur}</div>
                </Link>
           </div>
           
           <i 
            className="trash alternate outline icon"
           style={{color: 'red', marginTop: "7px"}}
           onClick={() => props.clickHandler(id)}
           ></i>
            <Link to={{pathname:`/edit/${id}`, state:{depense: props.depense}}}>
                <i 
                className="pencil alternate icon"
            ></i>
            </Link>           
       </div>
    )
}

export default DepenseCard
