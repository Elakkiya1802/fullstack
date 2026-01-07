import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AboutCollege from './AboutCollege';
import AboutDept from './AboutDept';
function About() {
  return( 
  <div className='about'>
    <h1>About page</h1>
    <h2>Welcome to about page</h2>
    <nav>
        <Link to ='college'>About College</Link>
         <Link to ='department'>About Department</Link>

    </nav>
    
    <hr/>
    <Outlet/>

  </div>
  )
}
export default About;