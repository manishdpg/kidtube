import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">

        <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <h2 className="header__logo">kidTube</h2>
            </Link>
        </div>

        <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={'/search/${inputSearch}'}>
              <SearchIcon className="header__inputButtoon" />
            </Link>
        </div>

        <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon  className="header__icon"/>
            <NotificationsIcon  className="header__icon"/>
            <AccountCircleIcon  />
        </div>

    </div>

  )
}

export default Header;