import React, {Component} from 'react' 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Homepage from '../components/Homepage';
import About from '../components/About';
import EventsPage from '../containers/EventsPage'; 
import EventsNew from '../containers/EventsNew'; 
import EventsShow from '../containers/EventsShow'; 
import Signup from '../containers/Signup';
import Login from '../containers/Login'; 
import "react-bootstrap"
import { connect } from 'react-redux'; 
import {fetchEvents} from '../actions/index'; 



class App extends Component {  

  componentDidMount() {
    if (this.props.length === 0) { 
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
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">All Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events/new">Add an Event</a>
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

