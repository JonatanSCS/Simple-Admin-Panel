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

export function calculateDate (date) {
  const d = new Date(date)
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec']
  const day = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  const hour = `${d.getHours()}:${d.getMinutes()}`

  return `${day}, ${hour}`
}
