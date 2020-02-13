import React, {useState} from 'react';
import { useField } from 'Formik';
import './App.css';
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Categories from './components/Categories';
import Search from './components/Search';
import Jokes from './components/Jokes';
import { Provider } from "react-redux";
import  store  from "./store/index.js";

const App = ( { store } ) => (
    <div className='app'>
        <h1>chuck norris JOKES</h1>
        <Provider store = { store } >
          <BrowserRouter>
              <Navigation />
              <Main />
              <Login />
          </BrowserRouter>
        </Provider>
    </div>
);

const  Navigation= (  ) => {

    if ( store.getState().signedInStatus ) {

        return (
            <nav>
                <ul>
                    <li> <NavLink exact activeClassName="current" to='/components/login'> Login </NavLink> </li>
                    <li> <NavLink exact activeClassName="current" to='/components/categories'> Categories </NavLink> </li>
                    <li> <NavLink exact activeClassName="current" to='/components/search'> Search </NavLink> </li>
                    <li> <NavLink exact activeClassName="current" to='/components/jokes'> Jokes </NavLink> </li>
                </ul>
            </nav>
        );
    }

    return (
        <nav>
            <ul>
                <li> <NavLink exact activeClassName="current" to='/components/login'> Login </NavLink> </li>
            </ul>
        </nav>
    );
}

const Main = ( ) => (
<>
        <Route exact path='/components/categories' component={Categories}></Route>
        <Route exact path='/components/search' component={Search}></Route>
        <Route exact path='/components/jokes' component={Jokes}></Route>
        <Route exact path='/components/login' component={Login}></Route>
</>
);

export default App;