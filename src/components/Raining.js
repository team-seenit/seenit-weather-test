import React from 'react';
import cloudImg from '../assets/images/cloud.png';
import ReactRain from 'react-rain-animation';

// import all the styles
import "react-rain-animation/lib/style.css";

const Raining = () => {
   return (
      <div id='raining' className='section right'>
         <div className='clouds'>
            <img className='rc1' src={cloudImg} alt='rain cloud' />
            <img className='rc2' src={cloudImg} alt='rain cloud' />
            <img className='rc3' src={cloudImg} alt='rain cloud' />
            <img className='rc4' src={cloudImg} alt='rain cloud' />
            <img className='rc5' src={cloudImg} alt='rain cloud' />
            <img className='rc6' src={cloudImg} alt='rain cloud' />
            <img className='rc7' src={cloudImg} alt='rain cloud' />
            <img className='rc8' src={cloudImg} alt='rain cloud' />

         </div>
         <ReactRain
            numDrops="100"
         />
      </div>
   )
}

export default Raining;