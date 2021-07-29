import React from 'react';
import { render } from '@testing-library/react-native';

import Icon from './Icon.component';

describe('Icon Component snapshot test', () => {
  it('Should render correctly', () => {
    const mockedProps = {
      name: 'ios-menu',
      size: 20,
      transparent: true
    };

    const { toJSON } = render(<Icon {...mockedProps} />);

    expect(toJSON()).toMatchSnapshot()
  })
});
