import { StyleSheet } from 'react-native';

import colors from '../configs/colorsDefaut';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    about: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20
    },

    pic: {
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor: colors.baseOrange
    },

    info: {
        marginLeft: 20
    },

    name: {
        fontSize: 14,
        fontWeight: 'bold',
        //color: 'black'
    },

    bio: {
        fontSize: 12,
        //color: 'black'
    },

    sliderView: {
        marginVertical: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sliderBar: {
        width: '100%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
    },

    slideDistance: {
        color: colors.baseOrange,
        fontSize: 16,
        fontWeight: 'bold'
    },

    menuOption: {
        width: '100%'
    }
});

export default styles;

