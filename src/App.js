
import './App.css';
import './styles.css';
import MoviesSearch from './components/moviesSearch';
import { useState } from "react";
import FavoritesList from './favoritesList';
import MovieModal from './movieModal';

function App() {

  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  const closeModal = () => {
   setSelectedMovie(null);
    setIsModalOpen(false);
  }

  const addFavorites = (movie) => {
    setFavorites([...favorites, movie])
  }

  console.log(favorites)

  const removeFavourite = (movie) => {
    setFavorites(favorites.filter(f => f.imdbID !== movie.imdbID)) 
  }

  return (
    <div className="App">
      <MoviesSearch addFavorites={addFavorites} />
      <FavoritesList favorites={favorites} removeFavourite={removeFavourite} showModal={showModal} />
      { selectedMovie && (
        <MovieModal isModalOpen={isModalOpen} showModal={showModal} movie={selectedMovie} closeModal={closeModal} />
      )}


    </div>
  );
}

export default App;
