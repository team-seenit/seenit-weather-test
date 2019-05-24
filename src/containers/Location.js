import React, { Component } from 'react';

export default class Location extends Component {
   render() {
      return(
         <div id='location' className='section'>
            <form>
               <input type='text' placeholder='CITY/TOWN' />
               <input type='text' placeholder='COUNTRY' />
            </form> 
         </div>
      )
   }
} 