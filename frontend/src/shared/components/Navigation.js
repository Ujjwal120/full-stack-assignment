import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {

    return<div className = "navbar">       
        <NavLink to = '/nature' activeStyle = {{borderBottom : '3px solid black'}} 
            isActive = {(match, location) => {
                if(!match) return false;
                return (match.url === location.pathname); 
            }}>
            <button type = 'button' >Nature</button>    
        </NavLink> 
            &nbsp;&nbsp;
        <NavLink to = '/tech' activeStyle = {{borderBottom : '3px solid black'}}
            isActive = {(match, location) => {
                if(!match) return false;
                return (match.url === location.pathname); 
            }}>
            <button type = 'button' >Tech</button>    
        </NavLink> 
            &nbsp;&nbsp;
        <NavLink to = '/festival'activeStyle = {{borderBottom : '3px solid black'}} 
            isActive = {(match, location) => {
                if(!match) return false;
                return (match.url === location.pathname); 
            }}>
            <button type = 'button' >Festival</button>    
        </NavLink> 
    </div>;
};

export default Navigation;