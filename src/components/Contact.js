import React from 'react';
import './Contact.css';

/*function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/men/50.jpg" alt=""/>
      <div>
        <h4 className="name">Rodney Lambert</h4>
        <div className="status">
          <span className="status-online"></span>
          <span className="status-text">Online</span>
        </div>
      </div>
    </div>
  );
}*/

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt=""/>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"}></span>
          <span className="status-text">{props.online ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;