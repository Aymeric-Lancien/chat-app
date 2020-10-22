import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt=""/>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status" onClick={event => {
            this.setState({online: !this.state.online}) ;
          }}>
            <span className={this.state.online ? "status-online" : "status-offline"}></span>
            <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;