import React, {useState, useEffect} from "react"
import { v4 as uuid_v4 } from "uuid";
import Header from "./Header";
import AddDepense from "./AddDepense";
import DepenseList from "./DepenseList";
import DetailDepense from "./DetailDepense";
import EditDepense from "./EditDepense";
//import EditDepense from "./EditDepense.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "amounts";
  const [amounts, setAmounts] = useState([]);
  //const [update, setUpdate] = useState({});

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

const updateDepenseHandler = (depenseUp) =>{
  console.log("TEST " ,depenseUp); 
 /*const initialAmount = amounts.map(function (amount, index, array) {
    if(amount.id === depenseUp.id){
      //donnée avoaka avy any amle array ana amount
      return amount; 
    }
    
});
console.log(initialAmount);
const { id, valeur, cause, acteur } = initialAmount ;
    setAmounts(
      amounts.map((amount) => {
        return amount.id === id ? { ...depenseUp } : amount;
      })
    );*/
}
  

/*const editCondition = () => {
  //if(condition){
    return <EditDepense />
  //}
}*/
  return (
    <Router>
      <Header />
      <Switch>
      <Route
            path="/"
            exact
            render={(props) => (
              <DepenseList
                {...props}
                depenses={amounts}
                getAmountId={removeAmountHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddDepense {...props} addDepenseHandler={addDepenseHandler} />
            )}
          />
          
          <Route path="/depense/:id" component={DetailDepense} />
          <Route path="/edit/:id" render={(props) => (<EditDepense {...props} updateDepense={updateDepenseHandler} />)} />
      </Switch>
    </Router>
   
  );
}

export default App;