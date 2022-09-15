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
      title: JSON.stringify(dataStore.responseData),
    },
    
  ];

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );


@observer
export default class Details extends Component<IProps,IState> {

    constructor(props:IProps) {
        super(props) 
    }

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <FlatList
            data={DATA}
            renderItem={this.renderItem}
            />
            </SafeAreaView>
        );
    }
};


