export function flatRoutes (routes) {
  let _routes = []
  routes.forEach(route => {
    _routes.push(route)
    if (route.items) {
      _routes = [..._routes, ...flatRoutes(route.items)]
    }
  })
  return _routes
}
