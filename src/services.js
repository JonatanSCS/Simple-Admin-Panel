/* istanbul ignore file */

import payments from './mocks/payments'
import detail from './mocks/detail'

export const getPaymentsRecords = sortBy => {
  return new Promise((resolve) => {
    resolve(sortByField(payments.data.payments, sortBy))
  })
}

export const getPaymentById = id => {
  return new Promise((resolve) => {
    resolve(detail.data.payment)
  })
}

/**
 * Code only used simulating service sorting response
 * @param {array} list of elements to sort
 * @param {string} field to sort by
 */
export function sortByField (list, field) {
  const type = typeof field
  const sorters = {
    number: sortNumerically,
    string: sortAlphabetically
  }
  const exceptions = {
    customer: list.sort((a, b) => a?.customer?.name > b?.customer?.name ? 1 : -1),
    type: list.sort((a, b) => a.brand > b.brand ? -1 : 1),
    payment_method: list.sort((a, b) => a?.payment_method?.brand > b?.payment_method?.brand ? -1 : 1)
  }

  return exceptions[field] || list.sort((a, b) => sorters[type](a, b, field))
}

const sortNumerically = (a, b, field) => (a[field] - b[field])
const sortAlphabetically = (a, b, field) => a[field] > b[field] ? 1 : -1
