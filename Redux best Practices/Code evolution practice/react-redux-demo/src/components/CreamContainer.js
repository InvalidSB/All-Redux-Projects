import React,{useState} from 'react'

import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCream } from '../redux'

function CreamContainer() {
    const[value,setValue]=useState(1)

    const state = useSelector(state => state.IceCream.noofCreams)
    console.log(state);
    const dispatch =useDispatch()
    const clickHandler=()=>{
        dispatch(buyCream(value))
    }

    return (
        <div>
            <h1>They have {state} ice-cream in Their Shop</h1>
            <input type="number" onChange={e=>setValue(e.target.value)} defaultValue="1" />
            <button onClick={clickHandler}>Buy{value}</button>
        </div>
    )
}

export default CreamContainer
