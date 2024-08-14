import React, {useState} from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'


function SideMenu({active}) {
  const [navData, setNavData] = useState(navListData)
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className="logo">
      <i className="bi bi-dice-4-fill"></i>
        <span className='brand'>Friv</span>
      </a>
        <ul className='nav'>
          {navData.map(item =>(
              <NavListItem key={item._id} item = {item}/>
            ))}
        </ul>     
    </div>
  )
}

export default SideMenu