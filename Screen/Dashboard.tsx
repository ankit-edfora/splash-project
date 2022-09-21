import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DATA } from '../common/Constant';
import { styles } from '../styles/Styles';


interface IProps {
    navigation?: any
}
interface IState {
    loading: boolean,
    data: any[],
    page: number,
    refreshing: boolean,
    siteTitle: ''
}

@observer
export default class Dashboard extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    }
    state: IState = {
        loading: false,
        data: [],
        page: 1,
        refreshing: false,
        siteTitle: ''
    }

    navigateToDetails(url: string) {
        //console.log("URL:",this.state.url)
        this.props.navigation.navigate('Details', {
            url: url
        })
    }

    navigateToLogin = () => {
        this.props.navigation.navigate('Login');
    }



    renderFooter = () => {
        //console.log("inside render footer")
        return (
            <View style={styles.renderFooter}>
                <TouchableOpacity style={styles.logoutBtn} onPress={this.navigateToLogin}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        );
    };

    handleRefresh = () => {
        //console.log("inside handle refresh")
        this.setState(
            {
                page: 1,
                refreshing: true
            },
        );
    };

    handleLoadMore = () => {
        //console.log("inside handle load more, page no.-->", this.state.page)

        this.setState(
            {
                page: this.state.page + 1
            },
        );
    };

    render() {
        const renderItem = ({ item }) => (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => { this.navigateToDetails(item.url); }}
                >
                    <Text>{item.title}</Text>
                </TouchableWithoutFeedback>
            </View>
        );

        return (
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    ListFooterComponent={this.renderFooter}
                    onEndReachedThreshold={50}
                />
            </SafeAreaView>
        );
    }
};


