import React, { Component } from 'react';
import './animation.css';

import Sunny from '../../components/Sunny';
import Raining from '../../components/Raining';

let intervalId;

export default class Animation extends Component {

   componentDidMount() {
      this.animateBackground();
      intervalId = setInterval(() => this.animateBackground(), 18000);
   }

   componentWillUnmount() {
      clearInterval(intervalId);
   }
   
   animateBackground = () => {
      const sunBackground = document.querySelector('#sunny');
      const rainBackground = document.querySelector('#raining');
      setTimeout(() => this.changeToRaining(sunBackground, rainBackground), 5000)
      setTimeout(() => this.changeToSunny(sunBackground, rainBackground), 13000)
   }

   changeToRaining = (sunnyEL, rainingEl) => {
      sunnyEL.classList.remove('middle');
      sunnyEL.classList.add('left');
      rainingEl.classList.remove('right');
      rainingEl.classList.add('middle');
      return new Promise(() => console.log('Now raining!'))
   }

   changeToSunny = (sunnyEL, rainingEl) => {
      rainingEl.classList.remove('middle');
      rainingEl.classList.add('right');
      sunnyEL.classList.remove('left');
      sunnyEL.classList.add('middle');
   }

   render() {
      return(
         <div id='background' className='section'>
            < Sunny />
            < Raining />
         </div>
      )
   }
}