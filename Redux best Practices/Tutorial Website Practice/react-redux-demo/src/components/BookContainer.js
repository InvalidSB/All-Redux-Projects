import React from 'react'
import {buyBook} from '../redux'
import {connect} from 'react-redux'

function BookContainer(props) {
    console.log(props.noofBooks)
    return (
        <div>
            <h1>No of Books = {props.noofBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    )
}

const mapStatetoProps= (state)=>{
        return{
            noofBooks:state.noofBooks
        }
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        buyBook:function(){
            dispatch(buyBook())
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer)
