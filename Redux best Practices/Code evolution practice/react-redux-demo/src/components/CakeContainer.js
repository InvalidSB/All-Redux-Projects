import React from 'react'

import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake, returnCake } from '../redux'

function CakeContainer() {
    const state = useSelector(state => state.Cake.noOfcakes)
    const dispatch =useDispatch()
    const clickHandler1=()=>{
        dispatch(buyCake())
    }
    const clickHandler2=()=>{
        dispatch(returnCake())
    }

    return (
        <div>
            <h1>They have {state} cakes in Their Shop</h1>
            <button onClick={clickHandler1}>Buy</button>
            <button onClick={clickHandler2}>Return</button>
        </div>
    )
}

export default CakeContainer
