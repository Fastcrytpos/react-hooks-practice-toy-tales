import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import axios from "axios";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

useEffect(() => {
      axios.get("http://localhost:3001/toys")
      .then(res =>{console.log("successfully got data from api: ");setToys(res.data);
        //console.log(res.data)
      })
      
      
    },[])
function countlikes(id){
   
    setToys(t=>
      t.map(toy=>
        toy.id===id?{...toy,likes:toy.likes+1}:toy));


    const likedToy = toys.find(toy => toy.id === id);


    axios.patch(`http://localhost:3001/toys/${id}`,{likes:likedToy.likes+1})
        .then(responce=>{console.log("successfully updated item with id: ",id)})
        .catch(err=>(console.log("error updating likes: ",err)))

  }

function handleClick() {
    setShowForm((showForm) => !showForm);
  }
function deleteToy(toyid){
  setToys(toys.filter(toy=>toy.id!==toyid));
  axios.delete(`http://localhost:3001/toys/${toyid}`)
  .then(responce=>{console.log("successfully deleted with id: ",toyid);})
  .catch(err=>{console.log("error deleting item with id: or the item not found ",toyid)})
}
function addToy(newToy){
  //updates toy internally
  //setToys([...toys,newToy])
  
  //post new toy to the server
  axios.post("http://localhost:3001/toys",newToy)
  .then(responce=>{console.log("successfully posted data",responce.data);setToys([...toys,responce.data])})
  .catch(error=>{console.log("error posting data",error)})
  
}




  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} countlikes={countlikes}/>
    </>
  );
}

export default App;
