import Home from './views/Home'
import Payments from './views/Payments'

export default [
  {
    id: 'home',
    path: '/',
    component: Home,
    exact: true
  }, {
    id: 'general',
    label: 'General',
    items: [
      {
        id: 'generalOne',
        path: '/general-one',
        label: 'General One'
      }, {
        id: 'generalTwo',
        path: '/general-two',
        label: 'General Two'
      }
    ]
  }, {
    id: 'transactions',
    label: 'Transactions',
    items: [
      {
        id: 'payments',
        path: '/payments',
        label: 'Payments',
        component: Payments
      }, {
        id: 'transfers',
        path: '/transfers',
        label: 'Transfers'
      }, {
        id: 'chargebacks',
        path: '/chargebacks',
        label: 'Chargebacks'
      }
    ]
  }, {
    id: 'accounting',
    label: 'Accounting',
    items: [
      {
        id: 'accountingOne',
        path: '/accounting-one',
        label: 'Accounting One'
      }, {
        id: 'accountingTwo',
        path: '/accounting-two',
        label: 'Accounting Two'
      }
    ]
  }, {
    id: 'developers',
    label: 'Developers',
    items: [
      {
        id: 'developersOne',
        path: '/developers-one',
        label: 'Developers One'
      }, {
        id: 'developersTwo',
        path: '/developers-two',
        label: 'Developers Two'
      }, {
        id: 'developersThree',
        path: '/developers-three',
        label: 'Developers Three'
      }
    ]
  }
]
