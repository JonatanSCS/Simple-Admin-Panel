import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { flatRoutes } from './utils'

import routes from './routes'
import Default from './views/Default'
import Sidebar from './Sidebar'

import UserMenu from './components/UserMenu'

import './styles.css'

function renderRoutes (route) {
  const _route = { ...route }
  _route.component = route.component || Default

  return route.path ? <Route key={_route.id} {..._route}></Route> : null
}

const App = () => {
  return (
    <div id="AppAdminPanel">
      <Router>
        <div className="HeroContainer">
          <Sidebar />
          <header>
            <UserMenu />
          </header>
        </div>
        <div className="MainContainer">
          <Switch>
            { flatRoutes(routes).map(renderRoutes) }
            <Route to="*" exact><h1>Not Found</h1></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
