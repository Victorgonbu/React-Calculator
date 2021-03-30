import PropTypes from 'prop-types';

function Display() {
  return null;
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
