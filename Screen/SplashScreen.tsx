import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {View} from 'react-native';

export default class SplashScreen extends React.Component {
render() {
    return (
      <View style={styles.renderSplash}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    renderSplash: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
  });

