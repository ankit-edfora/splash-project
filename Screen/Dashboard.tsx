import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import { observer } from 'mobx-react';
import {dataStore} from '../store/ApiStore';
import { reaction } from 'mobx'

interface IProps {
    
}
interface IState {
   
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

    render() {
        return (
            <View style={{ flex: 1 }}>
            <Text>
               { JSON.stringify(dataStore.responseData) }
            </Text>
            </View>
          );
    }
};


