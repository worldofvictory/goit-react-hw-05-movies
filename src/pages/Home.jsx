import { useEffect, useState} from "react";

import TrendingMoviesList from "components/MoviesList/MoviesList";

import { getTrendingMovies } from "../service/api";
import STATUS from "../constants/Status";
import Error from "../components/Error/Error";
import Loader from "components/Loader/Loader";


function  Home ()  {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');
        
    useEffect(() => {
        setStatus(STATUS.PENDING);
        getTrendingMovies()
            .then(data => {
                // throw "error"
                setMovies(data.results);
                setStatus(STATUS.RESOLVED);
            })
            .catch(error => {
                setError('Oops! Something went wrong. Try again.');
                setStatus(STATUS.REJECTED);
            });
    }, []);

    if (status === STATUS.RESOLVED) {
        return (
            <TrendingMoviesList
            movies={movies}/>   
        )
    }
    
    if (status === STATUS.PENDING) {
        return (
            <Loader/>  
        )
    }
       
    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default Home; 