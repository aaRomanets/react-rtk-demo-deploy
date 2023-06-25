import { createSlice } from '@reduxjs/toolkit';

//первоначальное число кексов, помещаемое в хранилище store
const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        //уменьшение числа кексов из хранилища store на единицу
        ordered: (state) => {
            state.numOfCakes--;
        },
        //добавление числа кексов в хранилище store на action.payload
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

//экспортируем редюсер по кексам в хранилище store
export default cakeSlice.reducer;
//экспортируем действия по кексам
export const {ordered, restocked} = cakeSlice.actions;