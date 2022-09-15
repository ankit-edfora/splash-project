import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView, View, Button, TouchableOpacity, StyleSheet, FlatList, Pressable} from 'react-native';
import { observer } from 'mobx-react';
import {dataStore} from '../store/ApiStore';
import { SafeAreaView } from 'react-native-safe-area-context';


interface IProps {
    navigation?:any
  }
  interface IState {
    component?:any
  }
  const DATA = [
    {
      title: dataStore.responseData,
    },
    
  ];

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );


@observer
export default class Dashboard extends Component<IProps,IState> {

    data: any
    reactHandler: any
    constructor(props:IProps) {
        super(props)
        this.data = {}
    }

    renderItem = ({ item }) => (
        <Item title={item.title} />
      );

    fetchData(url:string) {
        dataStore.apiCall(url)
    }
    

    render() {

        return (
            <SafeAreaView  style={{ flex: 1 }}>
         
            <Pressable 
            onPress = {() => {this.fetchData("https://api.agify.io?name=meelad"); this.props.navigation.navigate('Details')}}
            >

            <Text>https://api.agify.io?name=meelad </Text>
            </Pressable>

            <Pressable 
            onPress = {() => {this.fetchData("https://api.agify.io?name=meelad"); this.props.navigation.navigate('Details')}}
            >
            <Text>https://api.agify.io?name=meelad </Text>
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

