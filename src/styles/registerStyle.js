import { StyleSheet, Platform } from 'react-native';

import colors from '../configs/colorsDefaut';

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.baseOrange
    },

    scroll: {
        width: '100%',
        //paddingHorizontal: 20,
        paddingVertical: 50,
        
    },

    buttonFb: {
        width: '100%',
        marginBottom: Platform.OS === 'ios' ? 50 : 70,
        alignItems: 'center'
    },

    infoBox: {
        width: '90%',
        paddingVertical: 5,
        backgroundColor: colors.white,
        borderRadius: 10,
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
        borderColor: colors.white,
        borderWidth: 2,
        width: '90%',
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
        backgroundColor: 'transparent',
        color: colors.baseOrange,
        fontSize: 12
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
        color: colors.baseOrange,
        fontSize: 16,
        marginBottom: 5
    },

    registerButton: {
        marginTop: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles