import React, { Component } from 'react';
import Tooltip from './tooltip';
import '../stylesheet/app.css'

//rendering tooltip component from App component and passing position as props to tooltip component
export default class App extends Component{
 render(){
   return(
     <div>
       <div className="w-50 tc mt-5">
          <h1>Welcome to Tooltip </h1>
       </div>
       <div className="w-50 tc">
          <div className="mt-3">
            <Tooltip position="top"/>
          </div>
              
          <div className="mt-3"> 
            <Tooltip position="left"/>
          </div>
           
          <div className="mt-3">
            <Tooltip position="right"/>
          </div>

          <div className="mt-3">
            <Tooltip position="bottom"/>
          </div>

       </div>

     </div>
   )
 }
}
