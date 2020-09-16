import Home from './views/Home'
import Payments from './views/Payments'
import PaymentDetail from './views/PaymentDetail'

import generalImage from './assets/general.svg'
import transactionsImage from './assets/transactions.svg'
import accountingImage from './assets/accounting.svg'
import developersImage from './assets/developers.svg'

export default [
  {
    id: 'home',
    path: '/',
    component: Home,
    exact: true
  }, {
    id: 'general',
    label: 'General',
    image: generalImage,
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
    image: transactionsImage,
    items: [
      {
        id: 'payments',
        path: '/payments',
        label: 'Payments',
        component: Payments,
        exact: true,
        items: [{
          id: 'paymentsDetail',
          path: '/payments/:id',
          component: PaymentDetail
        }]
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
    image: accountingImage,
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
    image: developersImage,
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
