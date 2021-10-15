import './App.css';

import {Provider} from 'react-redux'
import store  from './redux/Store';
import CakeContainer from './components/CakeContainer';
import CreamContainer from './components/CreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
     <hr/>
     <CreamContainer/>
    </div>
    <UserContainer/>
    </Provider>
  );
}

export default App;
