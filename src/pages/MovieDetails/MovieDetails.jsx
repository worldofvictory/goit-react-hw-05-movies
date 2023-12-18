import MovieDetailsCard from "../../components/MoviDetailsCard/MoviDetailsCard";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { getDetails } from "../../service/api"
import STATUS from "../../constants/Status";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';


function MovieDetails  ()  {
    const location = useLocation();
    const prevLocationRef = useRef(location.state?.from ?? '/movies');

    const { movieId } = useParams(); 
    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');
        
    useEffect(() => {
        setStatus(STATUS.PENDING);
        if (!movieId) return;
        
        getDetails(movieId).then(data => {
          
            setDetails(data);
            setStatus(STATUS.RESOLVED);
        }).catch(err => {
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED);
        })         
    }, [movieId])

    if (status === STATUS.RESOLVED) {
        return (
            <>
                <div>
                   <GoBackButton location={prevLocationRef.current}/> 
                </div>
                <Section>
                    <Container>
                       <MovieDetailsCard details={details}/>   
                    </Container>
                </Section>
                <div>
                    <Container>
                        <h2>Additional Info</h2>
                        <ul>
                            <li>
                                <Link to="cast">Cast</Link>                        
                            </li>
                            <li>
                                <Link to="reviews">Reviews</Link>                        
                            </li>
                        </ul>
                        <Suspense fallback={<p>Information search...</p>}>
                            <Outlet />  
                        </Suspense>  
                    </Container>
                </div>        
            </>      
        )
    } 

    if (status === STATUS.PENDING) {
        return <Loader/>
    }

    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default MovieDetails; 