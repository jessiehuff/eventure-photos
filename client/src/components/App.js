import React from 'react' 
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom'; 
import Homepage from '../components/Homepage';
import EventsPage from '../containers/EventsPage'; 
import EventsNew from '../containers/EventsNew'; 
//import EventsShow from '../containers/EventsShow'; 
import Signup from '../containers/Signup';
import Login from '../containers/Login'; 

const App = (props) => 
  <Router> 
    <div> 
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}> 
        <NavLink style={{ marginRight: '10px' }} to="/">Home
        </NavLink> 
        <NavLink style={{ marginRight: '10px' }} to="/api/v1/events">See All Events </NavLink> 
        <NavLink style={{ marginRight: '10px' }} to="/api/v1/events/new">Add an Event
        </NavLink> 
      </div> 
      <Route exact path="/" component={Homepage} /> 
      <Route exact path="/events" component={EventsPage} /> 
      <Route exact path="/events/new" component={EventsNew} /> 
      <Route exact path="/signup" component={Signup} /> 
      <Route exact path="/login" component={Login} /> 
    </div> 
  </Router> 


export default App;

//<Route path="/events/:id" component={EventsShow} />
