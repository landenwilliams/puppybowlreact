import React, {useState, useEffect} from 'react';
import root from '../index.js';

const RenderHeader = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(true);
  const [puppiesTwo, setPuppiesTwo] = useState([]);

  useEffect(() => {
    const fetchPuppiesTwo = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players"
        );
        const result = await response.json();
        const puppies = result.data.players;
        
        console.log("puppies set");
        setPuppiesTwo(puppies);
        

      } catch (error) {
        console.log("Ruh Roh!");
        // console.log(error);
      }
    };
    fetchPuppiesTwo();
  }, []);



  const addPuppy = async () => {
    
    event.preventDefault();
    // setVisible((prev) => !prev);
    
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: `${name}`,
                  breed: `${breed}`,
                }),
              }
            );
            const result = await response.json();
            console.log(result);


            try {
              const response = await fetch(
                "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players"
              );
              const result = await response.json();
              const puppies = result.data.players;
              
              console.log("puppies set");
              setPuppiesTwo(puppies);
              
      
            } catch (error) {
              console.log("Ruh Roh!");
              // console.log(error);
            }
  
  
            root.render (<><RenderHeader/><div id='playerContainer'>{
  
              puppiesTwo.map((pup,index) => {
                
                return  <React.Fragment key={index} >
                        
                          {visible && ( 
                            <div key={index} id={pup.id} className="single-player-card">
                              <div className="header-info">
                                <p className="pup-title">{pup.name}</p>
                                <p className="pup-number">{pup.id}</p>
                              </div>
                              <img src={pup.imageUrl} />
                              <button className="detail-button" id={pup.id} value="" onClick={() => detailFunction(pup)}>See details</button> 
                              <button className="delete-button" data-id={pup.id} onClick={() => deleteFunction(pup.id)}>Delete</button>
                            </div>
                          )}
                        </React.Fragment>
                      
              }
              
            )}
            </div></>)

            
          } catch (err) {
            console.error(err);
          }
    
}

const goBackFunction = () => {

  console.log("sup");
  root.render (<><RenderHeader/><div id='playerContainer'>{

    puppiesTwo.map((pup,index) => {
      
      return  <React.Fragment key={index} >
              
                {visible && ( 
                  <div key={index} id={pup.id} className="single-player-card">
                    <div className="header-info">
                      <p className="pup-title">{pup.name}</p>
                      <p className="pup-number">{pup.id}</p>
                    </div>
                    <img src={pup.imageUrl} />
                    <button className="detail-button" id={pup.id} value="" onClick={() => detailFunction(pup)}>See details</button> 
                    <button className="delete-button" data-id={pup.id} onClick={() => deleteFunction(pup.id)}>Delete</button>
                  </div>
                )}
              </React.Fragment>
            
    }
    
  )}
  </div></>)
}


const searchFunction = (event) => {


  event.preventDefault();
  setResult(event.target.value);

  puppiesTwo.map((pup,index) => {
    
    if ( pup.name === result){
      console.log(pup.name);
      root.render( 
        <><div className="single-player-view" >
        <div className="header-info">
          <p className="pup-title">{pup.name}</p>
          <p className="pup-number">{pup.id}</p>
        </div>
        <p>Team: {pup.team ? pup.team.name : 'Unassigned'}</p>
          <p>Breed: {pup.breed}</p>
          <img src={pup.imageUrl} />
        <button id="see-all" onClick={goBackFunction}>Back to all players</button>
      </div></>)

    }
    
  })
  
 }

const handleChange = (event) => {
  setName(event.target.value);
  // console.log(name)
}
const handleChangeTwo = (event) => {
  setBreed(event.target.value);
  // console.log(breed)
}
const handleChangeThree = (event) => {
  setResult(event.target.value);
  // console.log(result);
}

    return (<>
        <form id="my-form">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Breed:</label>
        <input type="text" name="breed" onChange={handleChangeTwo}/>
        <button type="submit" onClick={addPuppy}>Submit</button>
        <label>Search:</label>
        <input type="text" name="search" onChange={handleChangeThree} />
        <button type="submit" onClick={searchFunction}>Search</button>
        </form></>)
}

export default RenderHeader;