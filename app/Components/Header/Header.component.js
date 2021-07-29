import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from '../Icon/Icon.component';
import config from './Header.config';
import styles from './Header.style';
import useHeader from './Header.hook';

const renderFormInput = ({ label, onChangeText, value, last, flex = 1, numeric }) => (
  <View style={styles.containerFlex(last, flex)}>
    <Text style={styles.textBody}>{ label }</Text>
    <TextInput 
      keyboardType={numeric ? 'numeric' : 'default'}
      value={String(value)}
      onChangeText={onChangeText}
      style={styles.input}
    />
  </View>
);

const renderFormGroup = ({ formValue, setFormValue }) => (
  <View>
    <View style={styles.row}>
      { renderFormInput({ label: 'First Name', value: formValue.firstName, onChangeText: firstName => setFormValue({ ...formValue, firstName }) }) }
      { renderFormInput({ label: 'Last Name', value: formValue.lastName, onChangeText: lastName => setFormValue({ ...formValue, lastName }), last: true }) }
    </View>
    <View style={styles.row}>
      { renderFormInput({ label: 'Age', value: formValue.age, onChangeText: age => setFormValue({ ...formValue, age }), flex: 1, numeric: true }) }
      { renderFormInput({ label: 'Link Photo', value: formValue.photo, onChangeText: photo => setFormValue({ ...formValue, photo }), last: true, flex: 3 }) }
    </View>
  </View>
);

const renderButton = ({ color, onPress, title }) => (
  <TouchableOpacity
    style={styles.button(color)}
    onPress={onPress}
    activeOpacity={1}
  >
    <Text style={styles.buttonText}>{ title }</Text>
  </TouchableOpacity>
);

const renderForm = ({ formValue, setFormValue, handleAddContact }) => (
  <View style={{
    display: 'flex',
    paddingHorizontal: 10
  }}>
    { renderFormGroup({ formValue, setFormValue }) }
    <View style={styles.row}>
      <View style={styles.containerFlex(true, 1)}>
        { renderButton({
          title: 'Add Contact',
          onPress: handleAddContact
        }) }
      </View>
    </View>
  </View>
);

const renderHeader = ({ handleOpenClose, showForm, title }) => (
  <View style={{...styles.container, zIndex: 100}}>
    {title && <Text style={styles.title}>{title}</Text>}

    <View>
      { renderButton({
        color: showForm ? '#eb2323': '',
        title: showForm ? 'Cancel' : 'Add Contact',
        onPress: handleOpenClose
      }) }
    </View>
  </View>
);

const Header = ({title}) => {
  const { formValue, setFormValue, showForm, handleOpenClose, handleAddContact } = useHeader();

  return (
    <View>
      { renderHeader({ handleOpenClose, showForm, title }) }
      { showForm && renderForm({ setFormValue, formValue, handleAddContact }) }
    </View>
  )
};

Header.propTypes = config.propTypes;
Header.displayName = config.displayName;

export default Header;
