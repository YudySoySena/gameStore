import React from 'react'
import './header.css'
import userImage from '../images/profile.jpg'

function Header({toggleActive}) {
  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
        <i class="bi bi-list"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
            <i class="bi bi-heart-fill"></i>
            <span className="like">0</span>
            </a>
            <a href="#" className="icon">
            <i class="bi bi-bag-heart-fill"></i>
            <span className="bag">0</span>
            </a>
            <div className="avatar">
                <a href="#">
                  <img src={userImage} alt="User Image" />
                </a>
                <div className="user">
                    <span>User Name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header