import payments from './mocks/payments'

export const getPaymentsRecords = () => {
  return new Promise((resolve) => {
    resolve(payments)
  })
}
