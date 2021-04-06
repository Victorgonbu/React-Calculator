import React from 'react';
import PropTypes from 'prop-types';

const Text = props => {
  const { content } = props;

  return (
    <p className="paragraph">
      {content}
    </p>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
