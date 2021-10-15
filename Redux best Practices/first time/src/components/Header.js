import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
             <div className="HEAD_ATC">
                <Link to="/"><h1>Redux Shop</h1></Link>
                <div className="cart-box">
                    <Link to="/CartDatapage" >
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0_2wKuNKX3vl2JXO9kdXHQAAAA%26pid%3DApi&f=1" alt="CART"/>
                    </Link>
                    <span>{props.data.length}</span>
                </div>
            </div>
         
        </div>
    )
}

export default Header
