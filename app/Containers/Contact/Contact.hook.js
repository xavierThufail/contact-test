import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import allAction from '../../Store/actions';

const useContact = (props) => {
  const { status, loading, contacts } = useSelector(state => state.contact);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(allAction.contact.getContact());
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  useEffect(() => {
    dispatch(allAction.contact.getContact());
  }, []);

  if (status) {
    setTimeout(() => {
      dispatch(allAction.contact.setStatus(''));
    }, 3000);
  };

  return {
    status,
    loading,
    contacts,
    refreshing,
    onRefresh
  };
};

export default useContact;
