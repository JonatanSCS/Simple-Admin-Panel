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

function renderRoutes (route) {
  const _route = {
    ...route,
    component: route.component || Default
  }

  return route.path ? <Route key={_route.id} {..._route}></Route> : null
}

const App = () => {
  return (
    <div id="AppAdminPanel">
      <Router>
        <Sidebar />
        <div className="MainContainer">
          <div>
            <Switch>
              { flatRoutes(routes).map(renderRoutes) }
              <Route to="*" exact component={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
