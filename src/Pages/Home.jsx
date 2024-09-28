import { NavLink } from 'react-router-dom'
import '../CSS/home.css'
import '../images/homeBg.jpg'
const Home = ()=>{
    return(
     <>
     <div className="home-container">
        {/* <img src="homeBg" alt="" /> */}
        <div className='home-inner-container'>
            <h2>Discover the World of Movies</h2>
            <p>Discover Your Next Favorite Movie: Explore the Latest Hits and Classics</p>
            <NavLink to='movieCards'>
                <button className='explore-button'>Explore More</button>
            </NavLink>
        </div>

     </div>
     </>
    )
}

export default Home