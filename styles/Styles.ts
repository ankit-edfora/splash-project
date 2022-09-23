import { StyleSheet } from 'react-native';
import { colors, dimens } from '../config/ConfigStyle';

export const styles = StyleSheet.create({
    logoutBtn: {
        width: "100%",
        borderRadius: dimens.twenty,
        height: dimens.fifty,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 500,
        backgroundColor: colors.deepPink
    },
    renderHeader: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: dimens.twenty,
        marginBottom: dimens.ten
    },

    renderFooter: {
        paddingVertical: dimens.twenty,
        borderTopWidth: 1,
        borderColor: colors.grey,
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
    },
    container: {
        flex: 1,
        backgroundColor: '#009387',
        textAlign: 'center'
    },
    header: {
        paddingHorizontal: dimens.twenty,
        paddingBottom: dimens.fifty,
        alignItems: 'center'
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: dimens.thirty,
        alignItems: 'center',
        marginTop: dimens.forty
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: dimens.thirty,
        borderTopRightRadius: dimens.thirty,
        paddingHorizontal: dimens.twenty,
        paddingVertical: dimens.thirty
    },

    inputView: {
        backgroundColor: colors.pink,
        borderRadius: dimens.thirty,
        width: "100%",
        height: dimens.forty,
        marginBottom: dimens.twenty,
        alignItems: 'center',
        borderWidth: 1
    },
    inputInfo: {
        marginTop: dimens.eighty
    },
    TextInput: {
        backgroundColor: colors.pink,
        height: dimens.fifty,
        flex: 1,
        padding: 4,
        marginLeft: dimens.twenty,

    },

    errorMsg : {
        color:"red", 
        marginBottom: 20
    },

    forgot_button: {
        height: dimens.twenty,
        marginBottom: dimens.thirty,
        textAlign: 'center'
    },

    loginBtn: {
        width: "100%",
        borderRadius: dimens.twenty,
        height: dimens.fifty,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.deepPink,
        position: 'absolute',
        bottom: dimens.ten
    },
    renderSplash: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    renderFlatList: {
        borderWidth: 1,
    },
});

