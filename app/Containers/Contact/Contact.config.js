import PropTypes from 'prop-types';

const component = {
  propTypes: {
    statusDelete: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      photo: PropTypes.string
    })),
    refreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired
  },
  displayName: 'ContactComponent'
};

const container = {
  propTypes: {
    navigation: PropTypes.object,
    route: PropTypes.object,
  },
  displayName: 'ContactContainer'
};

export default {
  container,
  component
};
