import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const ticketInformation = 
  <div>

  <style jsx>{`
    div {
      background-color: #9fbff2;
    }
    div:hover {
      background-color: #85aff2;
    }
    .example{
      color: #6d5cf2;
    }
  `}</style>

  <h3 className="example">{props.location} - {props.names}</h3>
  <h4>{props.formattedWaitTime} ago...</h4>
  
  <hr/>
</div>;

  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
      
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
