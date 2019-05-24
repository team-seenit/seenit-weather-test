import React, { Component } from 'react';

export default class Location extends Component {
   render() {
      return(
         <div id='location' className='section centre'>
            <div className='content'>
               <div className='intro'>
                  <h2>How is the weather looking in your local area?</h2>
                  <p>Find out here by simply inputting your address:</p>
               </div>
               <div className='search-query'>
                  <div className='geoencode'>
                  </div>
                  <form>
                     <input type='text' placeholder='CITY' />
                     <input type='text' placeholder='COUNTRY' />
                     <div className='btn'>
                        <input type='submit' value='SEARCH' />
                     </div>
                  </form> 
               </div>
            </div>
         </div>
      )
   }
} 