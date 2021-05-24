import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import Home from './home/index.js';
import store from './store/index.js';
import { BrowserRouter  , Route } from 'react-router-dom';

function App() {
  return (
    <Provider store = { store } >
        <BrowserRouter>
            <div>
                <Header/>
                <Route path = '/' exact component = {Home} ></Route>
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
