import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img 
                className="header__icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU7giFIxiCoF6Kftz477rJIi596zVYpRDiDQ&usqp=CAU"
                alt=""
                />
            </Link>
        

            <div className =' header_center'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header

