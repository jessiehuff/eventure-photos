import React from 'react' 
import { BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'; 
import Homepage from '../components/Homepage';
import EventsPage from '../containers/EventsPage'; 
import EventsNew from '../containers/EventsNew'; 
import EventsShow from '../containers/EventsShow'; 
import Signup from '../containers/Signup';
import Login from '../containers/Login'; 
import "react-bootstrap"


const App = (props) => 
  <Router> 
    <div> 
      <div> 
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/events">All Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/events/new">Add an Event</a>
        </li>
        </ul> 
        </nav>
      </div> 
      <Switch>
        <Route exact path="/" component={Homepage} /> 
        <Route exact path="/events" component={EventsPage} /> 
        <Route exact path="/events/new" component={EventsNew} /> 
        <Route exact path="/events/:eventId" component={EventsShow} /> 
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/login" component={Login} />
      </Switch> 
    </div> 
  </Router> 


export default App;
