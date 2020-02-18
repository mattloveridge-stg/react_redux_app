import React from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import Login from './components/Login';
import  store  from "./store/index.js";
import Categories from './components/Categories';
import Search from './components/Search';
import Jokes from './components/Jokes';
import './App.css';

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

export const  Navigation = (  ) => {

    console.log("Navigation 1       stage = ", store.getState());

    if ( store.getState().loggedInStatus ) {
        console.log("Navigation 2       stage = ", store.getState());

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