import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import Header from './Header.component';
import store from '../../Store';


jest
  .mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(() => ({
      navigate: jest.fn()
    }))
  }))
  .mock('../Icon', () => 'Icon')

describe('Header Component snapshot test', () => {
  it('Should render correctly', () => {
    const mockedProps = {
      title: 'Contact'
    };

    const { toJSON } = render(
      <Provider store={store}>
        <Header {...mockedProps} />
      </Provider>
    );

    expect(toJSON()).toMatchSnapshot()
  })
});
