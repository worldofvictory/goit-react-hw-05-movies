import { GiFilmSpool } from "react-icons/gi";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <>
            
                <GiFilmSpool />
                <h2>Enjoy Films</h2>
                       
            <div>
               
                        <Link to="/">Home</Link> 
                   
                        <Link to="movies">Movies</Link> 
                         
            
            </div>          
        </>        
    )
}
  
export default Navbar;
