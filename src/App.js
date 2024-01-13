import './App.css';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage';
import FilmPage from './pages/filmPage/FilmPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/films/:id' element={<FilmPage />}/>
        <Route path='/films/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
