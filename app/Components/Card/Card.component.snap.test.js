import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import Card from './Card.component';
import store from '../../Store';

jest
  .mock('../Icon', () => 'Icon')

describe('Card Component snapshot test', () => {
  it('Should render correctly', () => {
    const mockedData = {
      firstName: 'John',
      lastName: 'Doe',
      age: 90,
      photo: 'N/A',
      id: 10
    };

    const { toJSON } = render(
      <Provider store={store}>
        <Card {...mockedData} />
      </Provider>
    );

    expect(toJSON()).toMatchSnapshot()
  })
});
