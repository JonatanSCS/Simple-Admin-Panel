import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import views, { components, paths } from './views'

import Sidebar from './Sidebar'

function renderRoutes (view) {
  const View = components[view] || components.default
  return (
    <Route key={view} path={paths[view]}>
      <View />
    </Route>
  )
}

const App = () => {
  const Home = components.home
  return (
    <div id="AppAdminPanel">
      <Router>
        <Sidebar />
        <div className="MainContainer">
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              { views.map(renderRoutes) }
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
