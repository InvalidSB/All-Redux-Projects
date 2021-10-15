import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from "./containers/HomeContainer"
import {Route,Switch} from "react-router-dom"
// import CartDatapage from './components/CartDatapage'
import CDPContainer from './containers/CDPContainer';


function All(){
  return(
    <div>
       <HeaderContainer/>
     <HomeContainer/>
    </div>
  )
}

function App() {

  return (

    <div className="App">
      <Switch>
    <Route exact path="/CartDatapage" component={CDPContainer} />
    <Route exact path="/" component={All} />
      </Switch>
     
    </div>
  );
}

export default App;
