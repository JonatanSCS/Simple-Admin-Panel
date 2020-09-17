export default {
  data: {
    payment: {
      id: 'ord_2m9fvZfVz97nQhMmg',
      paid_at: null,
      livemode: 'false',
      amount: 10000,
      balance: 10000,
      brand: 'visa',
      status: 'declined',
      failure: 'insufficient_funds',
      type: 'credit',
      currency: 'MXN',
      created: 1565800520,
      updated: 1565800520,
      description: null,
      customer: {
        id: null,
        name: 'Juan Lopez',
        email: 'jorge@gmail.com',
        phone: '3302646833',
        payment_sources: null
      },
      nested_charges: [
        {
          id: '5d54384882c2724944bdf346',
          description: 'Payment from order',
          reference_id: null,
          status: 'declined',
          amount: 10000,
          created: 1565800520,
          fee: 626,
          payment_method: {
            auth_code: '831527',
            bank: 'BBVA BANCOMER, S.A.',
            brand: 'visa',
            clabe: null,
            description: 'PAGO MUEBLES DEPTO MUESTRA MANILK',
            exp_month: '12',
            exp_year: '19',
            expires_at: null,
            issuing_account_bank: '40012',
            issuing_account_holder_name: 'HIRJAV SA DE CV',
            issuing_account_number: '012180001054032274',
            issuing_account_tax_id: 'HIR1602169C8',
            last4: '0127',
            name: 'Jorge Lopez',
            reference: null,
            reference_number: '70619',
            tracking_code: 'BNET01001906070001501285',
            type: 'credit'
          },
          failure: 'insufficient_funds',
          failure_message: 'Esta tarjeta no tiene suficientes fondos para completar la compra.',
          device_fingerprint: '123456789abcdefghijkmnopqrstu'
        }
      ],
      line_items: [
        {
          name: 'Box of Cohiba S1s',
          unit_price: 10000,
          quantity: 1,
          metadata: []
        }
      ]
    }
  }
}
