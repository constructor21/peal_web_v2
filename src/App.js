import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import CampaignDetails from './components/campaigns/CampaignDetails';
import SignIn from './components/auth/SignIn'
import CreateCampaign from './components/campaigns/CreateCampaign';
import BillingCenter from './components/billingCenter/BillingCenter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div id="page-container">

          <div id="content-wrap">
            <Navbar />
            <Switch>
              <Route exact path='/'component={SignIn} />
              <Route path='/campaign/:id' component={CampaignDetails} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/create' component={CreateCampaign} />
              <Route path='/billing' component={BillingCenter} />
            </Switch>
          </div>

          <Footer id="footer" />

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
