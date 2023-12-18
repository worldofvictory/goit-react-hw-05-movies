/*import defaultImg from 'not-found.jpg'*/


function CastListItem({ character, name, profile_path}) {

    return (
        <div>
            <img
              width="240px"
              src={`https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt={name}
            />
            <div>
                <p>{name}</p>
                <p><span>Character:</span>{character}</p>
            </div>
        </div>
    )    
}

export default CastListItem; 