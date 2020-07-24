import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
// import 'animate.css'
import './style/base.scss'
import './style/App.scss'

// 公共模块
const AppIndex = loadable(() => import(/* webpackChunkName: 'default' */ './Layout'))

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Error/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Error/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/500' component={View500} />
            <Route path='/login' component={Login} />
            <Route path='/404' component={View404} />
            <Route component={AppIndex} />
        </Switch>
    </Router>
)

export default App
