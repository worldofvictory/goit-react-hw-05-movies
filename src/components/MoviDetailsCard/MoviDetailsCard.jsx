



function MovieDetailsCard({ details }) {
    const {
        poster_path = '',
        title = '',
        vote_average = 0,
        release_date = '',
        overview = '',
        genres = [],
    } = details;

    const average = Math.round(vote_average * 10); 
    const release = release_date.slice(0, 4);
    const movieGenres = genres.map(genre => genre.name).join(" ");
   

    return (
        <div>
            { <img width="250px" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />}
            <div>
                <h1>{title} ({release}) </h1>
                <p>User Score{average}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                {genres.length > 0 && (
                    <>
                    <h3>Genres</h3>
                    <p>{movieGenres}</p>
                    </>
                )}  
            </div>
        </div>
    )
}

export default MovieDetailsCard; 