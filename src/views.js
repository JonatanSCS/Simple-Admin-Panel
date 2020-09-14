import Home from './views/Home'
import Payments from './views/Payments'
import Default from './views/Default'

const generalPaths = {
  generalOne: '/general-one',
  generalTwo: '/general-two'
}

const transactionsPaths = {
  payments: '/payments',
  transfers: '/transfers',
  chargebacks: '/chargebacks'
}

const accountingPaths = {
  accountingOne: '/accounting-one',
  accountingTwo: '/accounting-two'
}

const developersPaths = {
  developersOne: '/developers-one',
  developersTwo: '/developers-two',
  developersThree: '/developers-three'
}

export const paths = {
  home: '/',
  ...transactionsPaths,
  ...generalPaths,
  ...accountingPaths,
  ...developersPaths
}

export const components = {
  home: Home,
  payments: Payments,
  default: Default
}

export default [
  'generalOne',
  'generalTwo',
  'payments',
  'transfers',
  'chargebacks',
  'accountingOne',
  'accountingTwo',
  'developersOne',
  'developersTwo',
  'developersThree'
]
