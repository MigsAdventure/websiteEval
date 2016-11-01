import React, { Component } from 'react';
import SampleSmartComponent from './SampleSmartComponent';
import NavButton from './NavButton';
// import '../css/style.scss';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className='navBar'>
          <div className='innerNavBar'>
            <NavButton text='HOME' />
            <NavButton text='MISSION' />
            <NavButton text='SERVICES' />
            <NavButton text='WORK' />
            <NavButton text='CREW' />
            <NavButton text='CONTACT' />
          </div>
        </div>
        <div className='navBanner'>
          <div className='navBannerInner'>
            <h1 className='title'>oddbee</h1>
            <div className='burgerArrow'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='arrow'></span>
            </div>
          </div>
        </div>
        <div className='plane'></div>
        <div className='shadow'></div>
      </div>

    )
  }
}
