import React,{useState} from 'react'
import {buyBook} from '../redux'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { returnBook } from '../redux'


function HookbookContainer() {
    const [val,setVal]=useState(1)
    const  noofBooks=useSelector(state=>state.noofBooks)

    const dispatch =useDispatch()
    // const clickHandler1=(val)=>{
    //         dispatch(buyBook(val))
    //     }
    const clickHandler2=()=>{
            dispatch(returnBook())
        }
    return (
        <div>
            <h1>Hook Contaainer ={noofBooks}</h1>
            <h2>no of books</h2>
            <input type="text" placeholder="no of items to buy" onChange={e=>setVal(e.target.value)} value={val}/>
            <button onClick={()=>dispatch(buyBook(val))}>buy {val} book</button>
            <label style={{color:"gray",fontSize:30}}>you can return only one item
            <button onClick={clickHandler2}>return</button>
            </label>
        </div>
    )
}

export default HookbookContainer
