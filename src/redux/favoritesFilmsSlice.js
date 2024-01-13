import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
}

const favoritesFilmSlice = createSlice({
    name: 'favoritesFilms',
    initialState,
    reducers: {
       addFavotiteFilms: (state, action) => {
            // получаем фильм и его id
            const film = action.payload;          
            state.films = [...state.films, film];
       },
       removeFavotiteFilms: (state, action) => {
            const film = action.payload;
            const { imdbID } = film;
            state.films = state.films.filter( item => item.imdbID !== imdbID);
       }
    }
})

export const { addFavotiteFilms, removeFavotiteFilms } = favoritesFilmSlice.actions;
export default favoritesFilmSlice.reducer;