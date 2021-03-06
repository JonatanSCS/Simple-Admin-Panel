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

import UserMenu from 'components/UserMenu'

import './styles/index.css'

function renderRoutes (route) {
  const _route = { ...route }
  _route.component = route.component || Default

  return route.path ? <Route key={_route.id} {..._route}></Route> : null
}

const App = () => {
  return (
    <div id="AppAdminPanel">
      <Router>
        <div className="container-align-center container-justify-between">
          <Sidebar />
          <header className="container-align-center">
            <UserMenu />
          </header>
        </div>
        <div className="MainContainer">
          <Switch>
            { flatRoutes(routes).map(renderRoutes) }
            <Route to="*" exact>
              <div className="ViewContainer">
                <h1>Not Found</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
