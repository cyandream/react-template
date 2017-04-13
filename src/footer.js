import React, { Component } from 'react';
 var year = 2017;

class Footer extends Component {
  render() {
    return ( 
      <div className = "footer" > copy right: { this.year }</div>

    );
  }
}

export default Footer;