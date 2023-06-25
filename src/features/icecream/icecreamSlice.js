import {createSlice} from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice';

//задаем начальное количество пачек мороженного в хранилище store
const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        //уменьшаем число пачек мороженного в хранилище store
        ordered: (state) => {
            state.numOfIcecreams--;
        },
        //увеличиваем количество пачек мороженного на action.payload
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }        
    },
    //при уменьшении числа кексов, уменьшаем число пачек мороженного
    extraReducers: builder => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--;
        })
    }
})

//экспортируем редюсер по пачкам мороженного в хранилище store
export default icecreamSlice.reducer;
//экспортируем действия по пачкам мороженного
export const {ordered, restocked} = icecreamSlice.actions;