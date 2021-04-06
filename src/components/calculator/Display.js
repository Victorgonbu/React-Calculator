import PropTypes from 'prop-types';
import React from 'react';
import * as styles from '../../styles/components.module.css';

function Display(props) {
  const { result } = props;

  return (
    <div className={styles.display}>
      {result}
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
