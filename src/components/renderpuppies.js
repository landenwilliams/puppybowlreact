import React, {useState, useEffect} from 'react';
import root from '../index.js';
import RenderHeader from "./renderheader.js";

const RenderPuppies =  () => {
  let puppiesLoaded = false;
  const [puppies, setPuppies] = useState([]);
  const [visible, setVisible] = useState(true);
  

  
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

  
  const detailFunction = (pup) => {

    setVisible((prev) => !prev);

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

  const goBackFunction = () => {

    console.log("sup");
    root.render (<><RenderHeader/><div id='playerContainer'>{

      puppies.map((pup,index) => {
        
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

  const deleteFunction = async (playerId) => {
    // setVisible((prev) => !prev);
    
    try {
     const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am//players/${playerId}`, {
       method: 'DELETE',
     });
     const result = await response.json();
     if (result.error) throw result.error;
     console.log('delete');

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
        setVisible((prev) => !prev);
     root.render (<><RenderHeader/><div id='playerContainer'>{

      puppies.map((pup,index) => {
        if(pup.id != playerId){
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
      }
      
    )}
    </div></>)
     return 
    } catch (err) {
     console.error(
       `Whoops, trouble removing player #${playerId} from the roster!`,
       err
     );
    }
    



    
  };

  if (!puppies || !puppies.length) {
    return (
    <h1>Loading puppies?!?</h1>
  )  
  } else {    
         
      return (
            
            <div id='playerContainer'>
              {
                puppies.map((pup,index) => {
                  
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
            </div>         
        )       
    } 
} 

export default RenderPuppies;


