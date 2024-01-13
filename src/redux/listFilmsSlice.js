import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
    films: [],
}

export const fetchFilms = createAsyncThunk(
    'listFilms/fetchFilms',
    async(data, {rejectWithValue}) => {
        try{
            const response = await fetch(`https://www.omdbapi.com?apikey=64405bd2&s=${data}`);

            if(!response.ok) {
                return rejectWithValue('Loading users error!')
            }

            return await response.json()
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)

const listFilmsSlice = createSlice({
    name: 'listFilms',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
                state.error = '';
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default listFilmsSlice.reducer;