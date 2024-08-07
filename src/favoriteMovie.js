export default function FavoriteMovie({ movie, removeFavourite, showModal}) {

    function handleShowModal() {
        showModal(movie)
    }

    return (
        <>
            <li className="favourite-movie" onClick={handleShowModal}>
                <img src={movie.Poster} alt={movie.Title} />
                <br/>
                <div className="favourite-movie-info">
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>
                </div><br/>
                <button className="remove-button" onClick={(e) => {
                    e.stopPropagation()
                    removeFavourite(movie)
                }}>
                    remove movie
                </button>
            </li>
         </>
     )
 }