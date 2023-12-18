import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";




function MoviesListItem ({ title, id }) {
    const location = useLocation();
    return (
        <li>
            <IoIosArrowForward />
            <navLink to={`/movies/${id}`} state={{ from: location }}>{title}</navLink> 
        </li>
    )
}

export default MoviesListItem; 