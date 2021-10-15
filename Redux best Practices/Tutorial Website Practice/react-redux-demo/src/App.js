import './App.css';

import {Provider} from 'react-redux'

// import BookContainer from './components/BookContainer';
import HookbookContainer from './components/HookbookContainer';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
   <div className="App">
<HookbookContainer/>

    </div>

    </Provider>
  );
}

export default App;
