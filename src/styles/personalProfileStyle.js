import { StyleSheet } from 'react-native';
import colors from '../configs/colorsDefaut';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    about: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25
    },

    picture: {
        backgroundColor: colors.baseOrange,
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    pictureWithContent: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    rating: {

    },

    divider: {
        backgroundColor: colors.baseGray,
        height: 1,
        width: '90%',
        marginTop: 25
    },

    description: {
        marginTop: 15,
        width: '90%'
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    bio: {

    },

    services:{
        marginTop: 25,
        width: '90%',
        marginBottom: 10
    },

})

export default style