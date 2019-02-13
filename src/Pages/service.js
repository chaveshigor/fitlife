import React from 'react';
import { View, Text } from 'react-native';

//COMPONENTS
import PriceCard from '../components/priceCard';

export default class Service extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
          //header: <Header title='Nome do Personal' backButton={true} navigation={navigation} />,
          title: 'Serviço',
          tabBarLabel:'Localizar',
        }
      };

    render() {
        return(
            <View style={{alignItems: 'center'}}>
                <PriceCard />
            </View>
        )
    }
}