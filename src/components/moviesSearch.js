import { useState } from "react";

function MoviesSearch({addFavorites}) {
    const [movieTitle, setMovieTitle] = useState("");
    

    async function searchMovie(e) {
        e.preventDefault();
        const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=ea7f165a`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            addFavorites(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="search-movies">
            <form onSubmit={searchMovie}>
                <label htmlFor="query">Movie Title</label>
                <input
                    type="text"
                    name="query"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    placeholder="Enter a movie title"
                    role="search"
                />
                <button type="submit">Search Movie</button>
            </form>
        </div>
    );
}

export default MoviesSearch;
