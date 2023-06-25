import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

//компонент по пользователям
export const UserView = () => {

    //вытаскиваем всю информацию о пользователях из хранилища store c помощью хука useSelector
    const user = useSelector(state => state.user);

    //c помощью хуков useEffect и useDispatch делаем запрос на получение информации о пользователях с json-server
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div>
            <h2>List of Users</h2>
            {/*Информация о пользователях загружается с jsonserver*/}
            {user.loading && <div>Loading...</div>}
            {/*Информация о пользователях не получилось загрузить c jsonserver*/}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {/*загруженная информация с json-server о пользоватялях помещена в хранилище store 
               и имя каждого пользователя демонстрируется */}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}