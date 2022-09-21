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
        alignItems: "center",
        justifyContent: "center",
      },
    
      inputView: {
        backgroundColor: colors.pink,
        borderRadius: dimens.thirty,
        width: "70%",
        height: dimens.forty,
        marginBottom: dimens.twenty,
     
        alignItems: "center",
      },
     
      TextInput: {
        backgroundColor: colors.pink,
        height: dimens.fifty,
        flex: 1,
        padding: 7,
        marginLeft: dimens.twenty,
      },
     
      forgot_button: {
        height: dimens.twenty,
        marginBottom: dimens.thirty,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: dimens.twenty,
        height: dimens.fifty,
        alignItems: "center",
        justifyContent: "center",
        marginTop: dimens.forty,
        backgroundColor: colors.deepPink,
      },
      renderSplash: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

