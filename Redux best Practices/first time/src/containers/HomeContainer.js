import Home from "../components/Home"
import {connect} from 'react-redux'
import {addTOCart} from "../Services/Actions/actions"
import {removeFROMCart} from "../Services/Actions/actions"


const mapStateToProps =state=>({
    data:state.cardItems
})
const mapDispatchToProps =dispatch=>({
    addTocartHandler: data=>dispatch(addTOCart(data)),
    removeFromCartHandler: data=>dispatch(removeFROMCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
