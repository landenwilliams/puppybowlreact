import React, {useState, useEffect} from 'react';
   
const RenderPuppies = () => {

  const [puppies, setPuppies] = useState([]);
  
  useEffect(() => {
    const allPuppiesData = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players"
        );
        const result = await response.json();
        const puppies = result.data.players;
        // console.log(puppies);
        setPuppies(puppies);
      } catch (error) {
        console.log("Ruh Roh!");
      }
    };

    allPuppiesData();
    
  }, []);

  const puppyList = puppies.map(i=>i);

  console.log(puppyList[0]);
  console.log(puppyList[0].name);

  

  return (
    <>
    <h1>hi</h1>
    </>
        
    
    
  )
}

export default RenderPuppies;