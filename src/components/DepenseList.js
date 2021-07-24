import React from 'react'
import DepenseCard from './DepenseCard'

const DepenseList = (props) => {
    console.log(props);
    const deleteAmountHandler = (id) => {
        props.getAmountId(id);
    }
    const updateHandler = (id) => {
        props.update(id);
    }

    const renderDepenseList = props.depenses.map((depense) => {
        return(
            <DepenseCard 
                depense={depense}
                key={depense.id}
                clickHandler = {deleteAmountHandler}
                updateHandler={updateHandler}
            />
        )
    })

    return (
       <div className="ui celled list">{renderDepenseList}</div>
    )
}

export default DepenseList
