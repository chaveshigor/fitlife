import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../configs/colorsDefaut';

//PASSAR NOME DO PERSONAL PARA PROXIMA PAGINA NO NAVIGATE

const renderList = ({ name, distance }, { navigation }) => 
    <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('MainStackPersonalProfile')} style={styles.box}>
            <View style={styles.picture} /* TAG PARA A FOTO DE PERFIL */ />

            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>4.7{/*AVALIAÇÃO AQUI */}</Text>
                    <Icon name='star' size={24} color={colors.baseYellow}/>
                </View>
            </View>

            <Text>{`${Math.floor(distance)}Km`}</Text>
        </TouchableOpacity>

        <View style={styles.div}/>
    </View>

const List = (props) => {
    return(
        <FlatList
            style={styles.list}
            data={props.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => renderList(item, props)}
        />
    )
};

const styles = StyleSheet.create({
    list: {

    },
    
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    div: {
        height: 1,
        backgroundColor: colors.baseGray,
        width:'70%'
    },

    box: {
        width: '90%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    content: {
        width: '65%',
        marginLeft: 20
    },

    picture: {
        backgroundColor: colors.baseOrange,
        width: 80,
        height: 80,
        borderRadius: 80
    },

    info: {

    },

    name: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },

    rating: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    distance: {

    },
})

export default List;
