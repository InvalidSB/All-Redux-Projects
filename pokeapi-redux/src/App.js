import './App.css';
import {Switch,Route,Redirect} from "react-router-dom"
import PokemonList from './containers/PokemonList';

function App() {
  return (

    <div className="App">
     <Switch>
       <Route exact path ="/" component={PokemonList}/>
       <Route exact path ="/pokemon/:pokemon" component={PokemonList}/>
       <Redirect to={"/"}/>
     </Switch>
    </div>
  );
}

export default App;
