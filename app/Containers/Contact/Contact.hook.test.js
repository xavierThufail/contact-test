
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-native/extend-expect';
import { Provider } from 'react-redux';

import useContact from './Contact.hook';
import store from '../../Store';
import allAction from '../../Store/actions';

jest.mock('../../Store/actions')

describe('useContact test', async () => {
  it('call onRefresh, should call allAction.contact.getContact', async () => {
    allAction.contact.getContact.mockImplementation((id) => jest.fn());

    const wrapper = ({ children }) => (
      <Provider store={store} >{children}</Provider>
    );

    const { result, waitForValueToChange } = renderHook(() => useContact(), { wrapper });

    await act( async() => {
      await result.current.onRefresh()
    })
    
    waitForValueToChange();

    expect(result.current).toBeDefined();
    expect(allAction.contact.getContact).toBeCalled();
  });
});
