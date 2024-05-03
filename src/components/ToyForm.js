import React,{useState} from "react";

  function ToyForm({addToy}) {

    const[formData,setFormData]=useState({
      name:"",
      image:"",
      likes:0
  }
  )


    

  function handlesubmit(e){
    e.preventDefault();
    console.log(formData);
    addToy(formData)
    setFormData({
      name:"",
      image:"",
      likes:0
    });
     }



  return (
    <div className="container" >
      <form  className="add-toy-form" onSubmit={(e)=>handlesubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
      {console.log(formData)}
    </div>
  );
}

export default ToyForm;
