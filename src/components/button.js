import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

//CONFIGS
import colors from '../configs/colorsDefaut';

const Button = (props) => {

    const { text, page, navigation, color, textColor, onPress } = props

    return(
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.button, {backgroundColor: color}]}>
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </View>
            {/* SALVAR POSSÍVEL ERRO EM UM ASYNCSTORAGE PARA SALVAR A MENSAGEM EM UM STATE*/}
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent:'center',
        //backgroundColor: this.props.color,
        width: '80%',
        marginVertical: 5
    },

    text:{
        fontSize: 18,
        color: colors.baseOrange,
        marginVertical: 10
    }
})

export default Button