import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//начальное состояние по пользователям
const initialState = {
    //флаг загрузки информации о пользователях
    loading: false,
    //информация о пользователях
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types
//запрос на получение информации о пользователях с jsonserver
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        //начинаем с json-server скачивать информацию о пользователях
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true;
        })
        //информация о пользователях с json-server скачена успешно 
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        })
        //информацию о пользователях с json-server скачать не получилось
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})

//экспортируем редюсер по пользователям
export default userSlice.reducer