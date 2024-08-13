import React, {useState} from 'react';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';


function Main() {
  const [active, setActive] = useState(false);
  const[games, setGames] = useState([]);

  const handelToggleActive = () => {
    setActive (!active)
  };

  const fetchData=()=>(
    fetch('http://localhost:3000/api/gamesData.json')
  )

  return (
    <main>
        <SideMenu active={active} />
        <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handelToggleActive}/>
        <div className="container-fliud">
        
        </div>
        </div>
    </main>
  );
}

export default Main