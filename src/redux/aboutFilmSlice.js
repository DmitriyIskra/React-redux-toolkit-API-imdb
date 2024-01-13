import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    film: null,
    loading: false,
    error: false,
}

export const fetchAbout = createAsyncThunk(
    'aboutFilm/fetchAbout',
    async(id, { rejectWithValue }) => {
        
        try {
            const response = await fetch(`https://www.omdbapi.com?apikey=64405bd2&i=${id}`);

            if(!response.ok) {
                return rejectWithValue('Loading users error!');
            }
            
            return await response.json();
        } catch(error) {
            return rejectWithValue(error);
        }
        
    }
)

const aboutFilmSlice = createSlice({
    name: 'aboutFilm',
    initialState,
    reducers: {
        clearFilm: state => {
            state.film = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAbout.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchAbout.fulfilled, (state, action) => {
                state.loading = false;
                state.film = action.payload;
                state.error = false;
            })
            .addCase(fetchAbout.rejected, state => {
                state.loading = false;
                state.film = null;
                state.error = true;
            })
    }
})

export const { clearFilm } = aboutFilmSlice.actions;
export default aboutFilmSlice.reducer;
