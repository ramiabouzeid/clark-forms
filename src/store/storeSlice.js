import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    form:{
        id: '',
        name: '',
        description: '',
        category_name_hyphenated: '',
        questions:[]
    }
};

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload;
        },
        setAnswer: (state, action) => {
            state.form.questions[action.payload.index] = {...state.form.questions[action.payload.index],value:action.payload.value};
        }
    },
});

export const {
    setForm,
    setAnswer
} = storeSlice.actions;

export const selectQuestions = (state) => state.questions;

export default storeSlice.reducer;