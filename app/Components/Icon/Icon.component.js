import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import config from './Icon.config';

const Icon = ({name, size, transparent}) => {
  return (
    <IconIonicons
      name={name}
      size={size}
      color={transparent ? 'transparent' : "#1b83e3"}
    />
  )
};

Icon.propTypes = config.propTypes;
Icon.displayName = config.displayName;

export default Icon;
