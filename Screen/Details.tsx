import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
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
    data: any,
    page: number,
    refreshing: boolean,
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
        data: '',
        page: 1,
        refreshing: false,
    }

    fetchData = () => {

        //console.log(page)
        const URL = this.url;
        //console.log("before adding page url--->", URL);

        //console.log("after adding page url--->",this.url);
        this.setState({ loading: true });
        // console.log("Before json")
        dataStore.apiCall(URL)
        //console.log("arrayData-->", dataStore.responseData)
        this.setState({
            data: dataStore.responseData,
            loading: false,
            refreshing: false
        });
    };

    componentDidMount() {
        //console.log("Inside component did mount");
        this.fetchData();
    }

    renderFooter = () => {
        //console.log("inside render footer")
        return (
            <View style={styles.renderFooter}>
                <Text>
                    {JSON.stringify(dataStore.responseData)}
                </Text>
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
    DATA = [
        {
            title: JSON.stringify(dataStore.responseData)
        },
    ]
    render() {

        const renderItem = ({ item }) => (
            <View>
                <Text>{item.title}</Text>
            </View>
        );
        return (
            <SafeAreaView>
                <FlatList
                    data={this.DATA}
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



