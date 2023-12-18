import MoviesListItem from "../MoviesListItem/MoviesListItem";



function MoviesList({movies}) {
    return (
        <div>       
            <ul>
                {movies.map(({id, title}) => <MoviesListItem
                    key={id}
                    title={title}
                    id={id}
                />)}
            </ul>
        </div>
    )
}

export default MoviesList; 