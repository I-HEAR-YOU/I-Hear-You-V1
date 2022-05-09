import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import{ Button } from './Button';

function Navbar() {
//   const [click, setClikck] = useState(false);
  const [button, setButton] = useState(true);

//   const handleClick = () => setClikck (!click);
//   const closeMobileMenu = () => setClikck (false);

  const showButton = () =>{
      if(window.innerWidth <= 960){
          setButton(false);
      }else{
          setButton(true);
      }
  };

  window.addEventListener('resize', showButton)

  return (
    <div>
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        IHearYou <i className="fa-solid fa-mobile-screen"></i>
                    </Link>
                    {/* <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul> */}
                    {button && <Button buttonStyle='btn--primary'>Enter</Button>}
                </div>
            </nav>
        </>
    </div>
  )
}

export default Navbar