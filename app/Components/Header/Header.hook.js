import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import allAction from "../../Store/actions";

const useHeader = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: ''
  });

  const handleAddContact = () => {
    dispatch(allAction.contact.postContact(formValue));
    handleOpenClose();
  };

  const handleOpenClose = () => {
    setFormValue({
      firstName: '',
      lastName: '',
      age: '',
      photo: ''
    })
    setShowForm(!showForm)
  };

  return {
    showForm,
    formValue,
    setFormValue,
    handleOpenClose,
    handleAddContact
  }
};

export default useHeader;
