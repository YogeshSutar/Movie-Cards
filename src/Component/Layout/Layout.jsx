import {useState, useEffect} from 'react'
import { NavLink, Outlet } from "react-router-dom";
import '../../CSS/layout.css';
import movieCardsImg from '../../images/moviesLogo.com.png'

const Layout = () => {
  const [scrolling, setScrolling] = useState(false)
  
  const activeClass = ({ isActive }) => {
    return isActive ? "nav-title active" : "nav-title";
  };


  // use for scrolling color
  useEffect(()=>{
    window.onscroll = ()=>{
    if (window.scrollY > 50) {
      setScrolling(true);  // Change background to black when scrolled
    } else {
      setScrolling(false); // Transparent when not scrolled
    }}
  })
 const navbar={
    position: 'fixed',
    width: '100%',
    display: 'flex',
    background: scrolling ? 'rgba(0,0 ,0 , 0.9)' : 'rgba(0, 0,0, 0.5)',
    backdropFilter: 'blur(5px)',
    justifyContent:'space-between',
    transition:'0.4s',
    alignItems: 'center',
    zIndex: 1000
}
  return (
    <>
      <header>
        {/* Navigation Bar */}

        <nav style={navbar} className='navbar' >
        <div className="image-container">
          <img src={movieCardsImg} alt="Samarth Fitness Gym Logo"/> 
        </div>
          <ul>
            <li>
              <NavLink to='/' className={activeClass}>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/movieCards' className={activeClass}>MOVIES CARD</NavLink> 
            </li>
            <li>
              <NavLink to='/contact' className={activeClass}>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={activeClass}>ABOUT</NavLink> 
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className='footer-container'>
        <h3>Copyright © MoviesHub</h3>
        <p>Stay connected with MovieHub for the latest movie reviews, news, and updates.</p> {/* Clean up address */}
      </footer>
    </>
  );
};

export default Layout;
