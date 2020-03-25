//npm install react-router-dom
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewCase from './pages/NewCase'

export default function Routes(){

    //o switch so permite uma rota por vez
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Logon} exact/>
                <Route path='/register' component={Register} exact/>
                <Route path='/profile' component={Profile} />
                <Route path='/cases/new' component={NewCase} exact/>
            </Switch>
        </BrowserRouter>
    )
}