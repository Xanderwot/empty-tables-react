import React, { Component } from 'react';
import logo from './../empty-box.jpg'

class EmptyTable extends Component {
  render() {
    return(
      <div className='empty-table'>
        <img src={logo} className='empty-logo' alt='empty-logo' />
        <b>Opps. Looks like the there is no content here.</b>
      </div>
    )
  }
}

export default EmptyTable;
