import React, {Component} from 'react';
import {Text, 
    TouchableOpacity, 
    StyleSheet, 
    Pressable, 
    FlatList, 
    View, 
    TouchableWithoutFeedback, 
    ActivityIndicator} from 'react-native';
import { observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {DATA} from '../common/Constant';


interface IProps {
    navigation?:any
  }
  interface IState {
    loading: boolean,
    data: any[],
    page: number,
    refreshing: boolean,
    siteTitle: ''
}
 
@observer
export default class Dashboard extends Component<IProps,IState> {

    url: string
    constructor(props:IProps) {
        super(props)
    }
    state: IState = {
        loading: false,
        data: [],
        page: 1,
        refreshing: false,
        siteTitle: ''
    } 

    setUrl(url:string) {
        this.url = url;
        //console.log("URL:",this.state.url)
        this.props.navigation.navigate('Details', {
            url: this.url
        })
    }

    navigateToLogin = () => {
        if(this.props.navigation)
            this.props.navigation.navigate('Login');  
    }

    Item = ({ title }) => (
        <View style={styles.itemContainer}>
            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url1); }}
            >           
               <Text>{title.title1}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url2); }}
            >           
            <Text>{title.title2}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url3); }}
            >           
               <Text>{title.title3}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url4); }}
            >           
               <Text>{title.title4}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url5); }}
            >           
               <Text>{title.title5}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url6); }}
            >           
               <Text>{title.title6}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url7); }}
            >           
               <Text>{title.title7}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url8); }}
            >           
               <Text>{title.title8}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url9); }}
            >           
               <Text>{title.title9}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url10); }}
            >           
               <Text>{title.title10}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url11); }}
            >           
               <Text>{title.title11}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url12); }}
            >           
               <Text>{title.title12}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url13); }}
            >           
               <Text>{title.title13}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url14); }}
            >           
               <Text>{title.title14}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url15); }}
            >           
               <Text>{title.title15}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url16); }}
            >           
               <Text>{title.title16}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url17); }}
            >           
               <Text>{title.title17}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url18); }}
            >           
               <Text>{title.title18}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url19); }}
            >           
               <Text>{title.title19}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url20); }}
            >           
               <Text>{title.title20}</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url21); }}
            >           
            <Text>{title.title21}</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
            onPress = {() => { this.setUrl(title.url22); }}
            >           
               <Text>{title.title22}</Text>
            </TouchableWithoutFeedback>
         
        </View>
    );

    renderFooter = () => {
        //console.log("inside render footer")
        return (
          <View style={styles.renderFooter}>
            <TouchableOpacity style={styles.loginBtn} onPress={this.navigateToLogin}> 
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
            <this.Item title={item} />
            </View>
        );
        
        return (
            <SafeAreaView>
               
            <FlatList
            data = {DATA}
            renderItem = {renderItem}   
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={50} 
            />
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
    renderHeader: { 
        alignSelf: "center", 
        fontWeight: "bold", 
        fontSize: 20, 
        marginBottom: 10
    },

    renderFooter: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
      },
  });

