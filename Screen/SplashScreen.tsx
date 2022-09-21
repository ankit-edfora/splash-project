import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { styles } from '../styles/Styles';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.renderSplash}>
                <Text>Splash Screen</Text>
            </View>
        );
    }
};


