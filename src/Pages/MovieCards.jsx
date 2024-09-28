import MCards from '../Component/MCards'
import '../CSS/cards.css'
import {useLoaderData} from 'react-router-dom' 
const MovieCards = ()=>{
    // moviesApi().then((data)=>console.log("data",data)).catch(()=>console.log("first"))
    const movieData = useLoaderData();
    console.log(movieData.Search); 
    return(
        <>
    <div className="container">
    {    
        movieData.Search.map((apiData, key)=>{
            return(
                <>
                    <MCards key={apiData.imdbID} data={apiData}/>

                </>
            )
        })
        }
    </div>

    {/* <div className="movie-container">
            {
                movieData?.Search?.map((movie, key) => (
                    <div className="movie-card" key={key}>
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p>Year: {movie.Year}</p>
                    </div>
                ))
            }
        </div> */}
        </>
    )
}

export default MovieCards