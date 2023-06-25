import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

//компонент по пачкам мороженного
export const IcecreamView = () => {
    //состояние количества добавляемых пачек мороженного
    const [value, setValue] = React.useState(1);
    //с помощью хука useSelector получаем количество пачек мороженого в хранилище store
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams); 
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams} </h2>
             {/*Кнопка удаления пачки мороженного из хранилища store*/}
            <button onClick = {() => dispatch(ordered())}>Order ice cream</button>
            {/*задаем число новых пачек мороженного */}
            <input
                type='number'
                value={value}
                onChange={e => setValue(parseInt(e.target.value))}
            />
            {/*Кнопка добавления нового количества пачек мороженного в хранилище store*/}
            <button onClick = {() => dispatch(restocked(value))}>Restock ice creams</button>
        </div>
    )
}