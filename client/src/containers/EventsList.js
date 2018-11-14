import React, { Component } from 'react'; 
import Event from '../containers/Event'; 
 

class EventsList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isSorted: false 
    }
  }

sortEvents = () => { 
  this.setState({isSorted: !this.state.isSorted})
}

render() {  
if (this.state.isSorted === false) {
  const renderEvents = this.props.events.sort(function(a,b){return a.id-b.id}).map((event) =>
  <Event event={event} key={event.id} />
  );
  return (
    <div> 
      <ul>
      <button type="button" id="sort" onClick={this.sortEvents.bind(this)}>Sort Events by Likes </button> 
      <br></br><br></br>
      {renderEvents}
      </ul> 
    </div> 
   )}
  else {
    [...this.props.events] 
    const sortedEvents = this.props.events.sort(function(a,b){return b.likes-a.likes}).map((event) => <Event event={event} key={event.id} />)
    return (
      <div> 
        <ul>
        <button type="button" id="unsort" onClick={this.sortEvents.bind(this)}>Unsort Events </button> 
        <br></br><br></br> 

        {sortedEvents}  
        </ul>
      </div> 
    )} 
}; 
}

export default EventsList; 