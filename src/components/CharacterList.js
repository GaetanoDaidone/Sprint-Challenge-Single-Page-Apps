import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { Grid, Image } from 'semantic-ui-react'

export default function CharacterList() {
  const [characters, setCharacters] = ([]) ;



  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
        .catch(error => {
          console.error('error', error)
        })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);


// useEffect(date => { // hits an api
//     setIsLoading(true) //sets boolean to true for photo is loading
//     axios
//       .get('https://api.nasa.gov/planetary/apod?api_key=KXLFCSFcc0A2LkvgNlG7acLVKNKmonK7SonHhvQL')  // sends a GET request for the API.
//       .then(nasa => {              // changed res to nasa,why do we use res? is it just standard? ... If the request has been completed successfully the function is called with is passed into the call of the then method
//         console.log(nasa) //logs res
//         setPicture(nasa.data.url)
//         setIsLoading(false) //loading is set to false because its been loaded
//         setCopyright(nasa.data.copyright)
//         setExplanation(nasa.data.explanation)
//       })
//   }, [pictures])  //if pictures updates, useeffect will run again
//   return (
//     <div>
//       {isLoading && <h1>Photos from Nasa are loading</h1>}
//         <h1>{copyright}</h1> 
//         <p>{explanation}</p>
//       <Photo img={pictures}/>
//     </div>
//   )

return ( 
  <section className='character-list grid-view'>
    <Grid centered columns={3} >
      {characters.map(results => (
        <Grid.Column width={5}>
          <CharacterCard  
              image={results.image}
              name = {results.name}
              species={results.species}
              status = {results.status}
              location = {results.location}/>
              </Grid.Column>

      ))}
      </Grid>
    </section>
  )
}
