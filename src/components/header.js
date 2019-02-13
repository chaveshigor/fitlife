import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';

//CONFIGS
import colors from '../configs/colorsDefaut';

const renderButton = ( button, name, navigation ) => {
    if( button === true )  {
        return (
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{height:24, width:24}}>
                <IconBack name={name} size={30} color='white' />
            </TouchableOpacity>)
    } else {
        return <View style={{height:24, width:24}} />
    }
}

const Header = ({ title, backButton, leftComponent, navigation }) => {
    return(
        <View style={estilo.container}>
            {renderButton(backButton, 'ios-arrow-back', navigation)}
            <Text style={estilo.title}>{title}</Text>
            {renderButton(leftComponent, 'ios-search')}
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: colors.baseOrange,
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 5
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Header