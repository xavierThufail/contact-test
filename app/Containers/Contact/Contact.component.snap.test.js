import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import Contact from './Contact.component';
import store from '../../Store';

describe('Contact Component snapshot test', () => {
  it('Should render correctly', () => {
    const mockedData = {
      status: '',
      loading: false,
      contacts: [],
      refreshing: false,
      onRefresh: jest.fn()
    };

    const { toJSON } = render(
      <Provider store={store}>
        <Contact data={mockedData} />
      </Provider>
    );

    expect(toJSON()).toMatchSnapshot()
  })
});
