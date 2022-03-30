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
    // The `reducers` field lets us define reducers and generate associated actions
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectQuestions = (state) => state.questions;

export default storeSlice.reducer;