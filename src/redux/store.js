import { configureStore } from "@reduxjs/toolkit";
import listFilmsSlice from "./listFilmsSlice";
import aboutFilmSlice from "./aboutFilmSlice";
import favoritesFilmsSlice from "./favoritesFilmsSlice";

export const store = configureStore({
    reducer: {
        listFilms: listFilmsSlice,
        aboutFilm: aboutFilmSlice,
        favoriteFilms: favoritesFilmsSlice,
    }
})