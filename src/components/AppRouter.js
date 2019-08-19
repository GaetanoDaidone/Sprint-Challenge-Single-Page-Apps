import React from 'react'
import { Switch, Route } from 'react-router-dom';
import EpisodeList from './EpisodeList';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationList from './LocationsList';


export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route component={WelcomePage} />
      
    </Switch>
  </div>

}