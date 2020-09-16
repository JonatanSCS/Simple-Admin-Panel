import Home from './views/Home'
import Payments from './views/Payments'

export default [
  {
    id: 'home',
    key: 'home',
    path: '/',
    component: Home,
    exact: true
  }, {
    id: 'transactions',
    key: 'transactions',
    label: 'Transactions',
    items: [
      {
        id: 'payments',
        key: 'payments',
        path: '/payments',
        label: 'Payments',
        component: Payments
      }
    ]
  }
]
