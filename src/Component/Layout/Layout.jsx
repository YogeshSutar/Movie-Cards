import { NavLink, Outlet } from "react-router-dom"
import '../../CSS/layout.css'
const Layout = () => {
    // const navbar ={
    //     color:""
        
    // }
    return (
    <>
      <header>
        {/* <h1>This is Layout page</h1> */}
        <nav className="navbar">
            <img src="" alt="" />
          <ul>
            <li>
              <NavLink to='/' className="nav-title">Home</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="nav-title">Contact</NavLink>
            </li>
            <li>
              <NavLink to='/about' className="nav-title">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3>Copyright © Samarth Fitness Gym</h3>
        <p>Kharalwadi, opposite of left to Khararaai Mandira, Pimpri Pune 411018</p>
      </footer>
    </>
  )
}

export default Layout
