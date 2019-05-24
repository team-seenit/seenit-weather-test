import React, { Component } from 'react';

export default class Location extends Component {
   state = {
      city: '',
      country: ''
   }

   handleFormInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   handleFormSubmission = e => {
      e.preventDefault();
      this.props.handleLocationInput(this.state);
   }

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
                  <form onSubmit={this.handleFormSubmission}>
                     <input type='text' placeholder='CITY' name='city' onChange={this.handleFormInput} />
                     <input type='text' placeholder='COUNTRY' name='country' onChange={this.handleFormInput} />
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