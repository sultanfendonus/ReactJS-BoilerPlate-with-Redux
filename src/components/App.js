import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history'
import HomePageBody from './main/HomePageBody';
import DashBoardHome from './dashboard/DashBoardHome'


const App = ()=>{
    return(
        <Router history={history}>
        <div>
            <div>
                <Route path='/' exact component ={HomePageBody} />
                <Route path='/dashboard' exact component = {DashBoardHome} />
            </div>
        </div>
        </Router>
    )
}

export default App;
