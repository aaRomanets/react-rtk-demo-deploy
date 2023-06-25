import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ordered, restocked} from './cakeSlice';

//компонент по кексам
export const CakeView = () => {

    //с помощью хука useSelector получаем количество кексов в хранилище store
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfCakes} </h2>
            {/*Кнопка удаления кекса из хранилища store*/}
            <button onClick={() =>dispatch(ordered())}>Order cake</button>
            {/*Кнопка добавления пяти кексов в хранилище store*/}
            <button onClick={() =>dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}