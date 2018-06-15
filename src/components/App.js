import React from 'react' 
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom'; 
import EventsPage from '../containers/EventsPage'; 

const App = (props) => 
  <Router> 
    <div> 
      <Route path="/" render={() => <h1> Welcome to Eventure </h1>} /> 
      <Route path="/events" component={EventsPage} /> 
    </div> 
  </Router> 


export default App;
