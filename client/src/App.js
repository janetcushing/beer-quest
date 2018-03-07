
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Navpills from "./components/Navpills";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SavedPlaces from "./pages/SavedPlaces";
import PlaceDetail from "./pages/PlaceDetail";
// import Dropdown from "./components/Dropdown";
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback';





const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        {/* <Navpills /> */}
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/savedplaces/:id" component={PlaceDetail} />
        <Route exact path="/savedplaces" component={SavedPlaces} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  </MuiThemeProvider>;

export default App;

