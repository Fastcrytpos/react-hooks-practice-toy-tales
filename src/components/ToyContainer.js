import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys,deleteToy,countlikes }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} deleteToy={deleteToy} countlikes={countlikes}/>
      ))}
    </div>
  );
}

export default ToyContainer;
