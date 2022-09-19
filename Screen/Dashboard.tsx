import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView, View, Button, TouchableOpacity, StyleSheet, FlatList, Pressable} from 'react-native';
import { observer } from 'mobx-react';
import {dataStore} from '../store/ApiStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLinkProps } from '@react-navigation/native';


interface IProps {
    navigation?:any
  }
  interface IState {
    component?:any
    url:string
  }
 
@observer
export default class Dashboard extends Component<IProps,IState> {

    url: string
    constructor(props:IProps) {
        super(props)
        this.state = {
            url:""
        }
    }

     setUrl() {
        this.url = "https://hn.algolia.com/api/v1/search?query=startups&page=";
        //console.log("URL:",this.state.url)
        this.props.navigation.navigate('Details', {
            url: this.url
        })
    }
    render() {

        return (
            <SafeAreaView  style={{ flex: 1 }}>
         
            <Pressable 
            onPress = {() => { this.setUrl(); }}
            >

            <Text>Link1</Text>
            </Pressable>


            <TouchableOpacity style={styles.loginBtn} onPress={() => {this.props.navigation.navigate('Login');}}> 
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

