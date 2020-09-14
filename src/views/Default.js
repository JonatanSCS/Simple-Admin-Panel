import React from 'react'
import PropTypes from 'prop-types'

function Default () {
  return <h1>Default</h1>
}

Default.propTypes = {
  label: PropTypes.string
}

export default Default
