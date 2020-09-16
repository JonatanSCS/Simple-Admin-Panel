import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'
import Default from './views/Default'
import Sidebar from './Sidebar'

function renderRoutes (route) {
  const _route = { ...route }
  _route.component = route.component || Default
  return route.items ? route.items.map(renderRoutes) : <Route {..._route} />
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
