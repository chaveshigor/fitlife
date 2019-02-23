import React from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Platform } from 'react-native';

//CONFIGS
import colors from '../configs/colorsDefaut';


const android = (color, text, textColor, page, navigation, onPress) => (
    <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.button, {backgroundColor: color}]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
)

const ios = (color, text, textColor, page, navigation, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={[styles.button, {backgroundColor: color}]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const Button = (props) => {

    const { text, page, navigation, color, textColor, onPress } = props

    return(
        Platform.OS === 'ios' ? ios(color, text, textColor, page, navigation, onPress) : android(color, text, textColor, page, navigation, onPress)
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent:'center',
        //backgroundColor: this.props.color,
        width: '90%',
        marginVertical: 5,
        elevation: 2
    },

    text:{
        fontSize: 18,
        color: colors.baseOrange,
        marginVertical: 10
    }
})

export default Button