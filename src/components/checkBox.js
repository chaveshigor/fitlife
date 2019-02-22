import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../configs/colorsDefaut';

export default class CheckBox extends React.Component {
    
    render() {
        
        const { title, isSelected, size, color, colorSelected, onPress, fontSize } = this.props

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Icon
                    name = {!isSelected ? 'square-o' : 'check-square-o'}
                    size = {size}
                    color = {!isSelected ? color : colorSelected}
                    />
                </TouchableOpacity>
                <Text style={[styles.title, {fontSize: fontSize}]}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        color: colors.white,
        marginLeft: 5
    }
})