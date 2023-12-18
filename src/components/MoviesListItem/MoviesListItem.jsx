import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";




function MoviesListItem ({ title, id }) {
    const location = useLocation();
    return (
        <li>
            <IoIosArrowForward />
            <NavLink to={`/movies/${id}`} state={{ from: location }}>{title}</NavLink> 
        </li>
    )
}

export default MoviesListItem; 