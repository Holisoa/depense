import React, {useState, useEffect} from "react"
import { v4 as uuid_v4 } from "uuid";
import Header from "./Header";
import AddDepense from "./AddDepense";
import DepenseList from "./DepenseList";
import EditDepense from "./EditDepense.jsx";


function App() {
  const LOCAL_STORAGE_KEY = "amounts";
  const [amounts, setAmounts] = useState([]);
  const [update, setUpdate] = useState({});

  const addDepenseHandler = (amount) =>{
    console.log(amount);
    setAmounts([...amounts, {id: uuid_v4(), ...amount}]);
  }
  const removeAmountHandler = (id) => {
    const newAmountList = amounts.filter((amount) => {
      return amount.id !== id;
    });
    setAmounts(newAmountList);
  } 

  useEffect(() => {
    const retriveAmounts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveAmounts) setAmounts(retriveAmounts)
  }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(amounts))
}, [amounts]);

const updateHandler = (id) =>{
  const updateAmount = amounts.filter((amount) => {
    return amount.id == id
  });
  console.log(updateAmount);
  setUpdate(updateAmount);
}
const editCondition = () => {
  //if(condition){
    return <EditDepense />
  //}
}
  return (
    <div>
      <AddDepense 
        addDepenseHandler={addDepenseHandler}   
        update={update}
      />
      <DepenseList 
        depenses={amounts}
        getAmountId = {removeAmountHandler}    
        update={updateHandler}   
      />
     
      
      
    </div>
   
  );
}

export default App;
