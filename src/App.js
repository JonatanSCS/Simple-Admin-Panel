import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'

import Sidebar from './Sidebar'

function renderRoutes (route) {
  return route.items ? route.items.map(renderRoutes) : <Route {...route} />
}

const App = () => {
  return (
    <div id="AppAdminPanel">
      <Router>
        <Sidebar />
        <div className="MainContainer">
          <div>
            <Switch>
              { routes.map(renderRoutes) }
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
