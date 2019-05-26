import React from 'react';
import sunImg from '../assets/images/sun.png';
import cloudImg from '../assets/images/cloud.png';

const Sunny = () => {
   return (
      <div id='sunny' className='section middle'>
         <div className='clouds'>
            <img className='c1' src={cloudImg} alt='cloud' />
            <img className='c2' src={cloudImg} alt='cloud' />
            <img className='c3' src={cloudImg} alt='cloud' />
         </div>
         <div className='sky'>
            <img src={sunImg} alt='the sun' id='sun' />
         </div>
      </div>
   )
}

export default Sunny