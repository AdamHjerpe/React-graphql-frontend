import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import AuthPage from './pages/Auth'
import EventsPage from './pages/Events'
import BookingsPage from './pages/Bookings'
import MainNavigation from './components/Navigation/MainNavigation'

import './App.scss'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className='main-content'>
            <Switch>
              <Redirect from='/' to='auth' exact />
              <Route path='/auth' component={AuthPage} />
              <Route path='/events' component={EventsPage} />
              <Route path='/bookings' component={BookingsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App
