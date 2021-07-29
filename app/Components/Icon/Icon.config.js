import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  transparent: PropTypes.bool
};

const displayName = 'Icon';

export default {
  propTypes,
  displayName
};
