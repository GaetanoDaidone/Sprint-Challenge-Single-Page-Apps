import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { Grid, Image } from 'semantic-ui-react'

export default function EspisodeList() {
  const [episodes, setEpisodes] = ([]) ;



  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episodes/")
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
      {episodes.map(results => (
        <Grid.Column width={5}>
          <CharacterCard  
              name = {results.name}
              airDate = {results.air_date}
              episode = {results.episode}
              character = {results.character}
          />
              </Grid.Column>

      ))}
      </Grid>
    </section>
  )
}
