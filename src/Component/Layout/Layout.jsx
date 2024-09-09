import { NavLink, Outlet } from "react-router-dom"
const Layout = ()=>{
return(
    <>
    <h1>This is Layout page</h1>
    <nav>
        <ul>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/Contact' >Contact</NavLink>
            </li>
            <li>
                <NavLink to='/About' >About</NavLink>
            </li>
        </ul>
    </nav>
    <Outlet/>
    <footer>
        <h3>copyright@ Samarth Fitness Gym</h3>
        <p>Kharalwadi opposite of left to Khararaai Mandira Pimpir Pune 411018</p>
    </footer>
    </>
)
}

export default Layout