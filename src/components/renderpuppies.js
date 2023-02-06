import React, {useState, useEffect} from 'react';

const RenderPuppies =  () => {
  let puppiesLoaded = false;
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players"
        );
        const result = await response.json();
        const puppies = result.data.players;
        
        
        console.log("puppies set");
        let puppiesLoaded = true;
        setPuppies(puppies);
        

      } catch (error) {
        console.log("Ruh Roh!");
        console.log(error);
      }
    };
    fetchPuppies();
  }, []);

const renderAllPuppies = () => {

  const playerContainer = document.getElementById('playerContainer');
  let playerContainerHTML = '';

  for( let i = 0; i <= puppies.length - 1; i++){
  
    const pup = puppies[i];
    let pupHTML = `
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">${pup.name}</p>
          <p class="pup-number">#${pup.id}</p>
        </div>
        <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
        <button class="detail-button" data-id=${pup.id}>See details</button>
        <button class="delete-button" data-id=${pup.id}>Delete</button>
      </div>
    `;
    playerContainerHTML += pupHTML;
        
  }
  playerContainer.innerHTML = playerContainerHTML;
}

  if (!puppies || !puppies.length) {
    return (
    <h1>Loading puppies..</h1>
  )  
  } else {
    return (
    <div id="playerContainer">{renderAllPuppies()}</div>
    )
  }
}

export default RenderPuppies;