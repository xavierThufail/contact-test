import PropTypes from 'prop-types';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

const displayName = 'Card';

export default {
  propTypes,
  displayName
};
