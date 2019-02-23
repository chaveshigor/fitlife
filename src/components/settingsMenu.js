import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconFoward from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'

import colors from '../configs/colorsDefaut';

export default class SettingMenu extends React.Component {
    render() {

        const { option, iconName, iconType, size=24 } = this.props

        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.option}>
                    <Icon
                    name={iconName}
                    type={iconType}
                    color='grey'
                    size={size}
                    />

                    <Text style={styles.textOption}>{option}</Text>
                </View>

                <IconFoward
                style={styles.arrow}
                name='ios-arrow-forward'
                color={colors.darkGray}
                size={24}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    textOption: {
        marginLeft: 10,
        fontSize: 14
    },

    arrow: {
        marginRight: 20
    }
})