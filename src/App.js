import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CampaignDetails from './components/campaigns/CampaignDetails';
import SignIn from './components/auth/SignIn'
import CreateCampaign from './components/campaigns/CreateCampaign';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={CampaignDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/create' component={CreateCampaign} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
