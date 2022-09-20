import React from 'react';
import {Text} from 'react-native';

import {View} from 'react-native';

export default class SplashScreen extends React.Component {
render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
};

