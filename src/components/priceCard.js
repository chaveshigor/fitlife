import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


//CONFIGS
import colors from '../configs/colorsDefaut';

export default class PriceCard extends React.Component {
    
    state = {
        info:[{key: '0', service: 'Musculação', price: 100, days: 'Todo dia', lessions: 1},
            {key: '1', service: 'Luta', price: 100, days: 'Segunda / Quarta', lessions: 1},
            {key: '2', service: 'Dança', price: 100, days: 'Todo dia', lessions: 1},],

        //USAR METODO MAP PARA INSERIR A KEY (0, 1, 2 ...) NOS SERVIÇOS QUANDO RECEBER REQUISIÇAO
    }

    render() {

        const { info } = this.state

        const renderPrice = ({service, days, price, lessions, key}) => (
            <View style={styles.container}>
                <View style={styles.box}>
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginVertical: 20, marginHorizontal: 15}}>
                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.price}>{`R$${lessions * price},00`/* PREÇO AQUI*/}</Text>
                    <Text style={styles.description}>{days}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.total}>Quantidade desejada:</Text>
                        <Picker
                        selectedValue={lessions}
                        style={{height: 50, width: 100}}
                        mode='dropdown'
                        onValueChange={(itemValue, itemIndex) => {
                            const state = this.state
                            state.info[key].lessions = itemValue
                            this.setState(state)
                        }
                        }>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="6" value={6} />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => {this.setState({modalVisible: true})}}>
                        <Icon style={{marginRight: 10}} name='check' size={25} color='white' />
                        <Text style={styles.buttonText}>CONTRATAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )

        return(
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <FlatList
                style={{width: '100%'}}
                data={info}
                renderItem={({ item }) => renderPrice(item, item)} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.baseGray,
        borderWidth: 2,
        borderRadius: 5,
        width: '95%',
        marginVertical: 30
    },

    service: {
        fontWeight: 'bold',
        color: colors.baseOrange,
        fontSize: 24
    },

    price: {
        fontSize: 20,
        marginVertical: 15,
        color: 'black'
    },

    description: {
        fontSize: 14,
        marginVertical: 15
    },

    total: {
        fontSize: 16,
        color: 'black'
    },

    button: {
        flexDirection: 'row',
        backgroundColor: colors.baseOrange,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 5,
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        marginVertical: 12
    }
})