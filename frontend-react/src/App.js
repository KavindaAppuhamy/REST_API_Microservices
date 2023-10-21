import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UserLogin from './components/UserLogin';
import CreateUser from './components/CreateUser';
import HomeComponent from './components/HomeComponent';
import MenuComponent from './components/MenuComponent';
import CreateMenuComponent from './components/CreateMenuComponent';
import UpdateMenuComponent from './components/UpdateMenuComponent';
import ViewMenuComponent from './components/ViewMenuComponent';
import AboutComponent from './components/AboutComponent';

import DeliveryComponent from './components/DeliveryComponent';
import CreateDeliveryComponent from './components/CreateDeliveryComponent';
import UpdateDeliveryComponent from './components/UpdateDeliveryComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/employee" component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/login-user/:id" component = {UserLogin}></Route>
                          <Route path = "/add-user/:id" component = {CreateUser}></Route>

                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/home" component = {HomeComponent}></Route>

                          <Route path = "/menu" component = {MenuComponent}></Route>
                          <Route path = "/add-menu/:id" component = {CreateMenuComponent}></Route>
                          <Route path = "/update-menu/:id" component = {UpdateMenuComponent}></Route>
                          <Route path = "/view-menu/:id" component = {ViewMenuComponent}></Route>

                          <Route path = "/delivery" component = {DeliveryComponent}></Route>
                          <Route path = "/add-delivery/:id" component = {CreateDeliveryComponent}></Route>
                          <Route path = "/update-delivery/:id" component = {UpdateDeliveryComponent}></Route>

                          <Route path = "/about" component = {AboutComponent}></Route>

                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
