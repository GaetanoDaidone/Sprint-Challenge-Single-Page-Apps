import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { Grid, Image } from 'semantic-ui-react'

export default function LocationsList() {
  const [locations, setLocations] = ([]) ;



  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/locations/")
      .then(response => {
        setLocations(response.data.results);
      })
        .catch(error => {
          console.error('error', error)
        })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);


return ( 
  <section className='character-list grid-view'>
    <Grid centered columns={3} >
      {locations.map(results => (
        <Grid.Column width={5}>
          <CharacterCard  
              name={results.name}
              type={results.type}
              dimensions={results.dimensions}
              resident={results.resident}/>
              </Grid.Column>

      ))}
      </Grid>
    </section>
  )
}
