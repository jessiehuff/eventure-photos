import React, {Component} from 'react' 
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import Homepage from '../components/Homepage';
import About from '../components/About';
import EventsPage from '../containers/EventsPage'; 
import EventsNew from '../containers/EventsNew'; 
import EventsShow from '../containers/EventsShow'; 
import PhotoShow from '../containers/PhotoShow'; 
import Signup from '../containers/Signup';
import Login from '../containers/Login'; 
import "react-bootstrap"
import { connect } from 'react-redux'; 
import {fetchEvents} from '../actions/index'; 
import EventEdit from '../containers/EventEdit'; 



class App extends Component {  

  componentDidMount() {
    if (this.props.events.length === 0) { 
     this.props.fetchEvents(); 
    }
  }

  render(){
    return(
    <Router> 
      <div> 
       <div> 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">All Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/events/new" className="nav-link">Add an Event</Link>
          </li>
          </ul> 
          </nav>
        </div> 
      <Switch>
        <Route exact path="/" component={Homepage} /> 
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={EventsPage} /> 
        <Route exact path="/events/new" component={EventsNew} /> 
        <Route exact path="/events/:eventId" component={EventsShow} /> 
        <Route exact path="/events/:eventId/edit" component={EventEdit} />
        <Route exact path="/events/:eventId/photos/:photoId" component={PhotoShow} />
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/login" component={Login} />
      </Switch> 
    </div> 
  </Router>
  )} 
}

const mapStateToProps = state => { 
  return {
   events: state.events.events,
   photos: state.events.photos
  }
}

export default connect(mapStateToProps, {fetchEvents})(App); 

