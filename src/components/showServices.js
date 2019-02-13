import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import colors from '../configs/colorsDefaut';

const renderServices = ({ name, description }, {navigation} ) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.serviceTitle}>{name}</Text>
            <View style={styles.divider} />
        </View>

        <View style={styles.about}>
            <Text style={styles.description}>{description}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainStackService')}>
            <View>
                <Text style={styles.buttonText}>SAIBA MAIS</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const showServices = (props) => (
    <FlatList
    data={props.data}
    renderItem={({item}) => renderServices(item, props)}
    keyExtractor={props.data.name}
    />
)


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: colors.baseGray,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
    },

    header: {
        width: '100%',
        alignItems: 'center',
        height: 50
    },

    serviceTitle: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },

    divider: {
        marginTop: 15,
        backgroundColor: 'white',
        width: '90%',
        height: 1
    },

    about: {
        width: '90%',
        marginTop: 10
    },

    description:{

    },

    button: {
        backgroundColor: colors.baseOrange,
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 15,
        elevation: 1
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    }

})

export default showServices
