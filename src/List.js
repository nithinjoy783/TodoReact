/* eslint-disable no-undef */
import React from 'react';

const List = ({ items }) => (
  
  <ul>
    <h1>Enter The Entries !</h1>
    {
      items && items.map((item, index) => <li key={index} onClick={(e)=>eventTriggerer(index)}>{item}<br></br>Date:-{new Date().toLocaleDateString()}  Time:-{new Date().toLocaleTimeString()}</li>
      
       )
      
      
     }
   
  </ul>
  

  );
  

export default List;