import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView, View, Button, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { observer } from 'mobx-react';
import {dataStore} from '../store/ApiStore';
import { SafeAreaView } from 'react-native-safe-area-context';


interface IProps {
    navigation?:any
  }
  interface IState {
    component?:any
  }

@observer
export default class Dashboard extends Component<IProps,IState> {

    data: any
    reactHandler: any
    constructor(props:IProps) {
        super(props)
        this.data = {}
    }

    fetchData() {
        var resp = undefined
        dataStore.apiCall()
    }

    componentDidMount() {
        this.fetchData()
    }

    DATA = [
        {
            title: JSON.stringify(dataStore.responseData)
        }
    ]

    Item = ({ title }) => (
        <View>
          <Text>{title}</Text>
        </View>
    );

    render() {

        const renderItem = ({ item }) => (
            <this.Item title={item.title} />
          );
        return (
            <ScrollView style={{ flex: 1 }}>
            <FlatList
            data={this.DATA}
            renderItem={renderItem}
            />
            <Text>
                { JSON.stringify(dataStore.responseData) }
            </Text>
               
            <TouchableOpacity style={styles.loginBtn} onPress={() => {this.props.navigation.navigate('Login');}}> 
            <Text>LOGOUT</Text>
            </TouchableOpacity>

            </ScrollView>
          );
    }
};

const styles = StyleSheet.create({
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

