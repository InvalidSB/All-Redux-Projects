import { Button } from '@material-ui/core'
import React from 'react'
import './CardDP.css'
import HeaderContainer from "../containers/HeaderContainer"

function CartDatapage(props) {
    console.log(props)
    const Data =props.data
    // console.log(typeof(Data))
    // console.log("carddata",Data[0].cardData.price)
    return (
        <div>
            <HeaderContainer/>

            <div className="down-cartpage">
                <div className="head">
                    <h1> <span>CART ,</span> Here are all the item that you added</h1>
                    <hr></hr>
                </div>
                <div className="container-wii">
                {
                        Data.map((i)=>
                        <div className="one-item">
                        <h1>{i.cardData.name} </h1>
                        <h2>{i.cardData.price}</h2>
                        <Button variant="contained" color="secondary" className="Btn" onClick={()=>{
                            props.removeFromCartHandler()
                        }}>Remove From Cart</Button>
                        </div>
                        )
                    }
                </div>
            </div>

                   
        </div>
    )
}

export default CartDatapage
