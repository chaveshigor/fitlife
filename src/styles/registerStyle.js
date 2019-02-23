import { StyleSheet, Platform } from 'react-native';

import colors from '../configs/colorsDefaut';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.baseOrange
    },

    message: {
        fontSize: 18,
        color: colors.white,
        marginTop:Platform.OS === 'ios' ? 20 : 0
    },

    divider: {
        marginVertical: 10,
        width: '100%',
        alignItems: 'center'
    },

    scroll: {
        width: '100%',
        marginTop: Platform.OS === 'ios' ? 20 : 0
    },

    buttonFb: {
        width: '100%',
        marginBottom: Platform.OS === 'ios' ? 50 : 70,
        alignItems: 'center'
    },

    infoBox: {
        width: '90%',
        alignItems: 'center'
    },

    inputs: {
        width: '100%',
        alignItems: 'center'
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        height: 50,
        marginVertical: 5
    },

    iconBox: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputTextBox: {
        width: '85%',
    },

    inputText: {
        width: '100%',
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: 12
    },

    dataPicker: {
        color: colors.white
    },

    icon: {

    },

    genre: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },

    genreText: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    registerButton: {
        marginBottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonModal: {
        fontSize: 14,
        color: colors.baseOrange,
        
    },

    modal: {
        marginTop: 40, 
        paddingTop: 15, 
        paddingHorizontal: 15, 
        width: '90%', 
        height: '85%', 
        backgroundColor: colors.white, 
        alignSelf: 'center', 
        borderRadius: 5, 
        elevation: 5
    }

})

export default styles