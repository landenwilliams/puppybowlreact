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
        setPuppies(puppies);
        

      } catch (error) {
        console.log("Ruh Roh!");
        // console.log(error);
      }
    };
    fetchPuppies();
  }, []);

  if (!puppies || !puppies.length) {
    return (
    <h1>Loading puppies..</h1>
  )  
  } else {    
         
          return (
            
            <div id='playerContainer'>
              {
                puppies.map((pup,index) => {
                  // return <div key={index} className="single-player-car"><div class="header-info"><h2 >{pup.name}</h2><h3>{pup.breed}</h3></div></div>
                  
                  return <div key={index} className="single-player-card">
                            <div className="header-info">
                              <p className="pup-title">{pup.name}</p>
                              <p className="pup-number">{pup.id}</p>
                            </div>
                          <img src={pup.imageUrl} />
                          </div>

                })
              }
            </div>         
          )       
    } 
} 

export default RenderPuppies;