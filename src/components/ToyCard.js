import axios from "axios";
import React from "react";
import { useState } from "react";


function ToyCard({id,name,image,likes,deleteToy,countlikes}) {


  return (
    <div className="card" key={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={()=>countlikes(id)}>Like {likes}</button>
      <button className="del-btn" onClick={()=>deleteToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
