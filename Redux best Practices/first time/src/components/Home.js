import React from 'react'
import shoes from './images/shoes.png';
import earphone from './images/earphone.png';
import watch from './images/watch.png';
function Home(props) {
  // console.log(props)
    return (
        <div>
           
            <div className="gallery">
      <div className="content">
        <img src={shoes} alt="jutta"/>
        <h3>Shoes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$100.00</h6>
        <ul>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <button class="buy-1" onClick={()=>props.addTocartHandler({price:"$100.00",name:"Shoes"})}>Add to Cart</button>
      </div>
      <div class="content">
        <img src={earphone} alt="Earphone"/>
        <h3>Earphone</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$40.00</h6>
        <ul>
        <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        {/* <button className="buy-2">Add to Cart</button> */}
        <button class="buy-2" onClick={()=>props.addTocartHandler({price:"$40.00",name:"Earphone"})}>Add to Cart</button>

      </div>
     
      <div className="content">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6Qu_1LKXib0OaxBYlRcw2wAAAA%26pid%3DApi&f=1" alt="iphone"/>
        <h3>i-Phone</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$1370.84</h6>
        <ul>
        <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <button class="buy-4" onClick={()=>props.addTocartHandler({price:'$1370.84',name:"i-Phone"})}>Add to Cart</button>
        {/* <button className="buy-4">Add to Cart</button> */}
      </div>
      <div className="content">
        <img src={watch} alt="watch" />
        <h3>Watch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$70.84</h6>
        <ul>
        <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
          <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        {/* <button className="buy-3">Add to Cart</button> */}
        <button class="buy-3" onClick={()=>props.addTocartHandler({price:"$70.84",name:"Watch"})}>Add to Cart</button>

      </div>
    </div>
            
        </div>
    )
}

export default Home
