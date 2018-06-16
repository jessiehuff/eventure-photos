import React from 'react' 
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom'; 
import EventsPage from '../containers/EventsPage'; 
import EventsNew from '../containers/EventsNew';
import Signup from '../containers/Signup';
import Login from '../containers/Login'; 

const App = (props) => 
  <Router> 
    <div> 
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}> 
        <NavLink style={{ marginRight: '10px' }} to="/events">See All Events </NavLink> 
        <NavLink style={{ marginRight: '10px' }} to="/events/new">Add an Event
        </NavLink> 
      </div> 
      <Route exact path="/" render={() => <h1> Welcome to Eventure </h1>} /> 
      <Route path="/events" component={EventsPage} /> 
      <Route exact path="/signup" component={Signup} /> 
      <Route exact path="/login" component={Login} /> 
    </div> 
  </Router> 


export default App;
