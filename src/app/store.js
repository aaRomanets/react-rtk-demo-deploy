import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

//составляем хранилище store
const store = configureStore({
    reducer : {
        //редюсер по кексам
        cake: cakeReducer,
        //редюсер по пачкам мороженного
        icecream: icecreamReducer,
        //редюсер по пользователям
        user: userReducer
    }
})

export default store;