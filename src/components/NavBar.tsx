import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

          <div className="header">

            <h1 className="menu_item">menu </h1>
              
                
                <NavLink to='/'>home</NavLink>
                <NavLink to='/products'>products</NavLink>
                <NavLink to='/favorites'>favorites</NavLink>
                <NavLink to='/basket'>basket</NavLink>
                <NavLink to='/contacts'>contacts</NavLink>
                <NavLink to='/about'>about</NavLink>
                    
                </div> 
          
        </div>
    );
};

export default NavBar;