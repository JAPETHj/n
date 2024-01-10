import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotificationIcon from '@material-ui/icons/Notifications'

function Navbar(){
    return(
      <div className='navbar'>
          <span><img className="navbar__logo " src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='' /></span>
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>Latest</span>
        <span>My List</span>
        <span>KIDS</span>
        <span><SearchIcon /></span>
        <span><NotificationIcon /></span>
        <span><StorefrontIcon /></span>
      </div>
    );
}
export default Navbar