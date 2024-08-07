import FavoriteMovie from "./favoriteMovie";

function FavoritesList(props) {
    return (
        <div className="favourites-container">
            <h3>My Movie List</h3>
            { props.favorites.length > 0 ? (
                <ul className="favourites-list">
                    {props.favorites.map((movie) => {
                        return <FavoriteMovie key={movie.ImdbID} movie={movie} removeFavourite={props.removeFavourite} showModal={props.showModal} />;
                    })}
                </ul>) : (<p>You have no movie yet.</p>)
            }

         </div>
     )
}

export default FavoritesList;