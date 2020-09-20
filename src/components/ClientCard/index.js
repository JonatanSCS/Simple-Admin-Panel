import React from 'react'
import PropTypes from 'prop-types'

import emailImage from './assets/email.svg'
import nameImage from './assets/name.svg'
import phoneImage from './assets/phone.svg'

import './styles.css'

function renderField ({ id, label, image, value }) {
  return value ? (
    <div
      key={id}
      className="container-align-center ClientCardField"
      data-testid={`ClientField-${id}`}
    >
      <img src={image} alt={`Client ${label}`}/>
      <p><span className="text-label">{label}:</span>{value}</p>
    </div>
  ) : null
}

function ClientCard ({ name, email, phone }) {
  const fields = [{
    id: 'name',
    label: 'Name',
    value: name,
    image: nameImage
  }, {
    id: 'email',
    label: 'Email',
    value: email,
    image: emailImage
  }, {
    id: 'phone',
    label: 'Phone',
    value: phone,
    image: phoneImage
  }]

  return (
    <div className="DataCard container-shadow" data-testid="ClientCardContainer">
      <h2>Client</h2>
      {fields.map(renderField)}
    </div>
  )
}

ClientCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
}

export default ClientCard
