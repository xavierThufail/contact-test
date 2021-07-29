import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, ScrollView, RefreshControl, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import {BoxShadow} from 'react-native-shadow'

import allAction from '../../Store/actions';
import { Header, Icon, Card } from '../../Components';
import styles from './Contact.style';
import config from './Contact.config';

const renderLoading = () => (
  <View style={styles.containerLoading}>
    <ActivityIndicator 
      size='large'
      color='#11999e'
    />
  </View>
);

const renderRefreshControl = ({ refreshing, onRefresh }) => (
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
);

const renderContacts = ({ contacts }) => contacts.map(contact => <Card {...contact} key={contact.id} />);

const renderScrollView = ({ contacts, refreshing, onRefresh, status }) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    refreshControl={renderRefreshControl({ refreshing, onRefresh })}
  >
    {!!status 
      ? <Text style={{ marginVertical: 5, fontSize: 20, color: status === "contact unavailable" ? '#ea3d13' : '#8fbc5b'}}>{status === "contact unavailable" ? 'Failed to delete Contact' : status}</Text>
      : <Text style={{ marginVertical: 5, color: 'transparent' }}></Text>}
    { contacts && renderContacts({ contacts }) }
  </ScrollView>
);

const ContactComponent = (props) => {
  const { status, loading, contacts, refreshing, onRefresh } = props;

  return (
    <View style={styles.container}>
      <Header title="Contact" />
      
      {loading && contacts.length === 0
        ? renderLoading()
        : renderScrollView({ contacts, refreshing, onRefresh, status })}
    </View>
  );
};

ContactComponent.propTypes = config.component.propTypes;
ContactComponent.displayName = config.component.displayName;

export default ContactComponent;
