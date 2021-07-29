
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-native/extend-expect';
import { Provider } from 'react-redux';

import useCard from './Card.hook';
import store from '../../Store';
import allAction from '../../Store/actions';

jest.mock('../../Store/actions')

describe('useCard test', () => {
  it('call handlePressIcon, should call allAction.contact.setIdCard', async () => {
    allAction.contact.setIdCard.mockImplementation((id) => ({
      type: 'SET_ID_CARD',
      payload: id
    }))

    const mockedData = {
      firstName: 'John',
      lastName: 'Doe',
      age: 90,
      photo: 'N/A',
      id: 10
    };

    const wrapper = ({ children }) => (
      <Provider store={store} >{children}</Provider>
    );

    const { result } = renderHook(() => useCard(mockedData), { wrapper });

    act(() => result.current.handlePressIcon()())

    expect(result.current).toBeDefined();
    expect(allAction.contact.setIdCard).toBeCalled();
    expect(result.current.detail).toBeTruthy();
    expect(result.current.display).toBe('flex');
    expect(result.current.bottom).toBe(10);
  });
});
