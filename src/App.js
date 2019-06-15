import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/navbar/sideDrawer/SideDrawer';
import Backdrop from './components/navbar/backdrop/Backdrop';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import CampaignDetails from './components/campaigns/CampaignDetails';
import SignIn from './components/auth/SignIn'
import CreateCampaign from './components/campaigns/CreateCampaign';
import BillingCenter from './components/billingCenter/BillingCenter';
import Map from './components/locations/Map';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      sideDrawerOpen: false
    };

  }

  // ***** Navigation API *** //

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      console.log("trying to open");
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backdrop;

     if (this.state.sideDrawerOpen) {
       backdrop = <Backdrop click={this.backdropClickHandler} />
     }

    return (
      <BrowserRouter>

        <div id="page-container">

          <div id="content-wrap">
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
             {backdrop}
            <Switch>
              <Route exact path='/'component={SignIn} />
              <Route path='/campaign/:id' component={CampaignDetails} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/create' component={CreateCampaign} />
              <Route path='/billing' component={BillingCenter} />
              <Route path='/locations' component={Map} />
            </Switch>
          </div>

          <Footer id="footer" />

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
