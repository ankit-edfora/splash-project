import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import { dataStore } from '../store/ApiStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Styles';

const _ = require('lodash')

interface IProps {
    navigation?: any
    router?: any
}
interface IState {
    loading: boolean,
    data: any[],
    page: number,
    refreshing: boolean,
    siteTitle: ''
}



@observer
export default class Details extends Component<IProps, IState> {

    url: string
    constructor(props: IProps) {
        super(props);
        const params = _.get(this.props, 'route.params', {})
        //console.log("params--->", params)
        const { url } = params
        this.url = url
    }
    state: IState = {
        loading: false,
        data: [],
        page: 1,
        refreshing: false,
        siteTitle: ''
    }

    fetchData = () => {

        //console.log(page)
        const URL = this.url;
        //console.log("before adding page url--->", URL);

        //console.log("after adding page url--->",this.url);
        this.setState({ loading: true });
        // console.log("Before json")
        dataStore.apiCall(URL)

        const arrayData = [...this.state.data, dataStore.responseData]
        //console.log("arrayData-->", arrayData)
        this.setState({
            data: arrayData,
            loading: false,
            refreshing: false
        });
    };

    DATA = [
        {
            title: JSON.stringify(this.state.data)
        },
    ];
    componentDidMount() {
        //console.log("Inside component did mount");
        this.fetchData();
    }

    renderFooter = () => {
        //console.log("inside render footer")
        return (
            <View style={styles.renderFooter}>
                <ActivityIndicator animating size="large" />
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
            () => {
                this.fetchData();
            }
        );
    };

    handleLoadMore = () => {
        //console.log("inside handle load more, page no.-->", this.state.page)

        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                // console.log("page number --->",this.state.page)
                this.fetchData();
            }
        );
    };


    Item = ({ title }) => (
        <View>
            <Text>{JSON.stringify(title)}</Text>
        </View>
    );
    render() {

        const renderItem = ({ item }) => (
            <this.Item title={item} />
        );
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    renderItem={renderItem}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={50}
                />
            </SafeAreaView>
        );
    }
};



