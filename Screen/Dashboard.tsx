import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import { observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';



interface IProps {
    navigation?:any
  }
  interface IState {
    component?:any
  }
 
@observer
export default class Dashboard extends Component<IProps,IState> {

    url: string
    constructor(props:IProps) {
        super(props)
    }

    setUrl(url:string) {
        this.url = url;
        //console.log("URL:",this.state.url)
        this.props.navigation.navigate('Details', {
            url: this.url
        })
    }

    navigateToLogin() {
        this.props.navigation.navigate('Login');
    }
    render() {

        return (
            <SafeAreaView  style={{ flex: 1 }}>
         
            <Pressable 
            onPress = {() => { this.setUrl("https://hn.algolia.com/api/v1/search?query=startups&page=1"); }}
            >

            <Text>About startups</Text>
            </Pressable>

            <Pressable 
            onPress = {() => { this.setUrl("https://catfact.ninja/fact"); }}
            >

            <Text>Get random cat facts via text message every day.</Text>
            </Pressable>

            <Pressable 
            onPress = {() => { this.setUrl("https://api.coindesk.com/v1/bpi/currentprice.json"); }}
            >

            <Text>View the Bitcoin Price Index (BPI) in real-time.</Text>
            </Pressable>

            <Pressable 
            onPress = {() => { this.setUrl("https://dog.ceo/api/breeds/image/random"); }}
            >

            <Text>Cheer yourself up with random dog images..</Text>
            </Pressable>


            <TouchableOpacity style={styles.loginBtn} onPress={this.navigateToLogin}> 
            <Text>LOGOUT</Text>
            </TouchableOpacity>
            </SafeAreaView>
          );
    }
};

const styles = StyleSheet.create({
    loginBtn: {
      width: "100%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 500,
      backgroundColor: "#FF1493",
    },
  });

