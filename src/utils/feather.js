/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import featherSprite from 'feather-icons/dist/feather-sprite.svg'

const FeatherIcon = ({ name, color, size, cssClass, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cssClass}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${featherSprite}#${name}`} />
  </svg>
)

export default FeatherIcon

FeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

FeatherIcon.defaultProps = {
  color: 'currentColor',
  size: 24,
}
