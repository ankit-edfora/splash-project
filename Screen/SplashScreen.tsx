import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class SplashScreen extends React.Component {
render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
};

