import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../configs/colorsDefaut';

export default class Divider extends React.Component {
    render() {

        const { width } = this.props

        return(
            <View style={[styles.divider, {width: width}]} />
        )
    }
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: colors.baseGray,
        height: 1
    }
})