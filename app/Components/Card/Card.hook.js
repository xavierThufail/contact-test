import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import allAction from '../../Store/actions';

const validateEdit = (editedValue) => {
  const error = [];
  if (editedValue.firstName.length < 4) {
    error.push('First Name must be 5 or more char');
  }
  if (editedValue.lastName.length < 4) {
    error.push('Last Name must be 5 or more char');
  }
  if (editedValue.age < 0) {
    error.push('Age is Empty');
  }

  return error;
};

const useCard = (props) => {
  const { idCard, loading, status } = useSelector(state => state.contact);


  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState('none');
  const [detail, setDetail] = useState(false);
  const [bottom, setBottom] = useState(0);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [age, setAge] = useState(String(props.age));
  const [photo, setPhoto] = React.useState(props.photo);

  const dispatch = useDispatch();

  const handleEdit = () => {
    const contactEdited = { firstName, lastName, age: Number(age), photo: props.photo ? props.photo : 'N/A' };
    const id = props.id;

    const error = validateEdit(contactEdited);

    if(error.length > 0) {
      dispatch(allAction.contact.setStatus(error[0]))
    } else {
      dispatch(allAction.contact.editContact(id, contactEdited));
      setEdit(true);
    }
  }

  const handleEditDone = () => {
    setEdit(false);
    handleButtonClose();
  }

  const handleDelete = () => {
    const id = props.id;
    dispatch(allAction.contact.deleteContact(id))
  }

  const handlePressIcon = (close) => () => {
    setDetail(close ? false : !detail);
    setDisplay(display == 'flex' ? 'none' : 'flex')
    setBottom(display == 'flex' ? 0 : 10)
    dispatch(allAction.contact.setIdCard(props.id));
  };

  const handleButtonClose = () => {
    setDisplay('none')
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setAge(String(props.age));
  };

  const handleButtonEdit = () => {
    setDisplay('flex');
    setBottom(10);
    setDetail(false);
  };

  if (status) {
    setTimeout(() => {
      dispatch(allAction.contact.setStatus(''))
    }, 3000)
  }

  if (props.id !== idCard && (detail || display === 'flex')) {
    setDetail(false);
    setDisplay('none');
  }

  return {
    age,
    edit,
    photo,
    status,
    bottom,
    detail,
    idCard,
    display,
    loading,
    lastName,
    firstName,
    setAge,
    setEdit,
    handleEdit,
    setLastName,
    setFirstName,
    handleDelete,
    handlePressIcon,
    handleButtonEdit,
    handleButtonClose,
    handleEditDone
  }
};

export default useCard;
