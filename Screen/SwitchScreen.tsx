import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import LoginScreen from './Login';
import SplashScreen from './SplashScreen'
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

interface IProps {
  navigation?:any
}
interface IState {
  component?:any
}

export default class SwitchScreen extends React.Component<IProps,IState> {

  timeoutHandle = setTimeout(()=>{
  }, 2000);

  constructor(props : IProps){
    super(props)
    this.state = {
     component : <SplashScreen />
    }
   }
componentDidMount(){

  this.timeoutHandle = setTimeout(()=>{
       this.setState({ component: <LoginScreen navigation={this.props.navigation}/> })
  }, 2000);
}

componentWillUnmount(){
  clearTimeout(this.timeoutHandle); 
}

render() {
    return (
      this.state.component
    );
  }
};