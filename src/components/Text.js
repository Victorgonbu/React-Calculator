import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/components.module.css';

const Text = props => {
  const { content } = props;

  return (
    <p className={styles.heroText}>
      {content}
    </p>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
