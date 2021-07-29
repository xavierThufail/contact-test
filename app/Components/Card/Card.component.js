import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';

import Icon from '../Icon/Icon.component';
import allAction from '../../Store/actions';
import styles from './Card.style';
import config from './Card.config';
import useCard from './Card.hook';

const renderImage = ({ photo = '' }) => (
  <Image
    style={styles.containerImage}
    source={{
      uri: photo.includes('http') ? photo : 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png'
    }}
  />
);

const renderIcon = ({ onPress, name, size }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Icon
      name={name}
      size={size}
    />
  </TouchableOpacity>
);

const renderInfo = ({ firstName, lastName, age }) => (
  <View>
    <Text style={styles.textSubject}>{`Name: ${firstName} ${lastName}`}</Text>
    <Text style={styles.textSubject}>{`Age: ${age} years old`}</Text>
  </View>
);

const renderContactInfo = ({ firstName, lastName, age, photo }) => (
  <View style={styles.row}>
    {renderImage({ photo })}
    {renderInfo({ firstName, lastName, age })}
  </View>
);

const renderButton = ({ onPress, color, children, last }) => (
  <View style={styles.containerFlex(last)}>
    <TouchableOpacity
      style={styles.button(color)}
      onPress={onPress}
      activeOpacity={1}
    >
      {children}
    </TouchableOpacity>
  </View>
);

const renderFormInput = ({ label, value, onChange, last, numeric }) => (
  <View style={styles.containerFlex(last)}>
    <Text style={styles.textBody}>{label}</Text>
    <TextInput
      keyboardType={numeric ? 'numeric' : 'default'}
      value={String(value)}
      onChangeText={onChange}
      style={styles.input}
    />
  </View>
);

const renderContact = ({ handlePressIcon, firstName, lastName, age, photo, display }) => (
  <View style={styles.container}>
    {renderContactInfo({ firstName, lastName, age, photo })}
    { display === 'none'
      ? renderIcon({ onPress: handlePressIcon(), name: 'ellipsis-horizontal-circle-outline', size: 24 })
      : renderIcon({ onPress: handlePressIcon(true), name: 'close-circle-outline', size: 24 })}
  </View>
);

const renderButtonEditDelete = ({ handleButtonEdit, handleDelete, display }) => (
  <View style={styles.contentContainer(display)}>
    <View style={styles.row}>
      {renderButton({
        children: <Text style={styles.buttonText}>Edit</Text>,
        onPress: handleButtonEdit
      })}
      {renderButton({
        color: '#eb2323',
        children: <Text style={styles.buttonText}>Delete</Text>,
        onPress: handleDelete,
        last: true
      })}
    </View>
  </View>
);

const renderButtonEditClose = ({ handleEdit, handleButtonClose, edit, loading, handleEditDone }) => (
  <View style={styles.row}>
    {renderButton({ 
      onPress: handleEdit,
      children: edit
        ? loading
        ? <ActivityIndicator
            size='small'
            color='#e4f9f5'
          />
        : handleEditDone()
        : <Text style={styles.buttonText}>Edit</Text>
    })}
    {renderButton({
      onPress: handleButtonClose,
      children: <Text style={styles.buttonText}>Close</Text>,
      color: '#eb2323',
      last: true
    })}
  </View>
);

const renderForm = ({
  display,
  firstName,
  lastName,
  age,
  setLastName,
  setFirstName,
  setAge,
  handleEdit,
  handleButtonClose,
  edit,
  loading,
  handleEditDone
}) => (
  <View style={styles.contentContainer(display)}>
    <View style={styles.row}>
      {renderFormInput({ label: 'First Name', value: firstName, onChange: firstName => setFirstName(firstName) })}
      {renderFormInput({ label: 'Last Name', value: lastName, onChange: lastName => setLastName(lastName) })}
      {renderFormInput({ label: 'Age', value: age, onChange: age => setAge(age), last: true, numeric: true })}
    </View>
    {renderButtonEditClose({ handleEdit, handleButtonClose, edit, loading, handleEditDone })}
  </View>
)

const Card = (props) => {
  const {
    age,
    edit,
    photo,
    bottom,
    detail,
    idCard,
    display,
    loading,
    lastName,
    firstName,
    setAge,
    handleEdit,
    setLastName,
    setFirstName,
    handleDelete,
    handlePressIcon,
    handleButtonEdit,
    handleButtonClose,
    handleEditDone
  } = useCard(props)

  return (
    <View style={{marginBottom: bottom}}>
      {renderContact({ ...props, handlePressIcon, display })}

      { detail && idCard === props.id
        ? renderButtonEditDelete({ handleDelete, handleButtonEdit, display })
        : renderForm({
          edit,
          loading,
          display,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          age,
          setAge,
          handleEdit,
          handleButtonClose,
          handleEditDone
        })
      }
    </View>
  )
}

Card.propTypes = config.propTypes;
Card.displayName = config.displayName;

export default Card;
