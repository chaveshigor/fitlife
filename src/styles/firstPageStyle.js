import { StyleSheet } from 'react-native';
import colors from '../configs/colorsDefaut';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: colors.baseOrange
    },

    appName: {
        fontSize: 40, 
        fontWeight: 'bold',
        margin: 5, 
        color: colors.white
    },

    inputs: {
        width: '100%',
        alignItems: 'center'
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        //borderColor: colors.baseOrange,
        //borderWidth: 2,
        width: '80%',
        height: 50,
        marginVertical: 5
    },

    error: {
        color: colors.white
    },

    viewCheckBox: {
        width: '80%', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },

    checkBox:{

    },

    buttons: {
        width: '100%',
        //marginTop: 10,
        alignItems: 'center'
    },

    iconBox: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {

    },

    inputTextBox: {
        width: '85%',
    },
    
    inputText: {
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: 12
    },

})

export default styles