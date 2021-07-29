
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-native/extend-expect';
import { Provider } from 'react-redux';

import useHeader from './Header.hook';
import store from '../../Store';
import allAction from '../../Store/actions';

jest.mock('../../Store/actions')

describe('useHeader test', () => {
  it('call handleOpenClose, should return expected value', async () => {
    const wrapper = ({ children }) => (
      <Provider store={store} >{children}</Provider>
    );

    const { result } = renderHook(() => useHeader(), { wrapper });

    expect(result.current.showForm).toBeFalsy();

    act(() => result.current.handleOpenClose())

    expect(result.current.showForm).toBeTruthy();
  });

  it('call handleAddContact, should call postContact', async () => {
    allAction.contact.postContact.mockImplementation(() => jest.fn())

    const wrapper = ({ children }) => (
      <Provider store={store} >{children}</Provider>
    );

    const { result } = renderHook(() => useHeader(), { wrapper });

    act(() => result.current.handleAddContact())

    expect(allAction.contact.postContact).toBeCalled();
  });
});
