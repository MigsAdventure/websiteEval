import React, { Component } from 'react';

export default class NavButton extends Component {

  render() {

    return (
      <div className='btnContainer'>
        <a className='button'>{this.props.text}</a>
      </div>
    )
  }
}
