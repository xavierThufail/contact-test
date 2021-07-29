/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from '../../Navigation/RootNavigator/RootNavigator.container';
import store from '../../Store';

if(__DEV__) {
  import('../../../ReactotronConfig').then(() => {console.log('join')})
}

const styles = {
  rootStyle: {
    flex: 1,
    backgroundColor: 'white'
  }
};

const App: () => Node = () => {
  return (
    <View style={styles.rootStyle}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </View>
  );
};

export default App;
