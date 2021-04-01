import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, handleClick } = props;
  return (
    <button onClick={handleClick(name)} type="button" className="button">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
