import React from 'react'
import { Link } from 'react-router-dom';
import DepenseCard from './DepenseCard'

const DepenseList = (props) => {
   
    const deleteAmountHandler = (id) => {
        props.getAmountId(id);
    }
    const updateHandler = (id) => {
        props.update(id);
    }

    const renderDepenseList = props.depenses.map((depense) => {
        return(
            <div>
                <DepenseCard 
                depense={depense}
                key={depense.id}
                clickHandler = {deleteAmountHandler}
                updateHandler={updateHandler}
                />
            </div>
            
        )
    })

    return (
        <div>
            <Link to="/add">
                <button>add new expense</button>
            </Link>
            <div className="ui celled list">{renderDepenseList}</div>
        </div>
        
    )
}

export default DepenseList
