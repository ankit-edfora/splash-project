import React, {useState, useEffect, Component} from 'react';
import {Text, ScrollView, View, Pressable, Button} from 'react-native';
import { observer } from 'mobx-react';
import {btnStore} from '../store/BtnStore';

interface IProps {
    
}
interface IState {
   
}

@observer
export default class ButtonScreen extends Component<IProps,IState> {

    constructor(props:IProps) {
        super(props)
        }

    render() {
        return (
        <View style={{ flex: 1 }}>
        <Button
        onPress={() => btnStore.inc()}
        title="Press Me"
        />
        <Text>
            {btnStore.count}
        </Text>

        </View>
        );
    }
    
};


