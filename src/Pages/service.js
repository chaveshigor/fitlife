import React from 'react';
import { View, Text } from 'react-native';

//COMPONENTS
import PriceCard from '../components/priceCard';

export default class Service extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
          title: navigation.getParam('title'),
          tabBarLabel: 'Localizar',
        }
      };

      render() {

        const { navigation } = this.props

        return(
            <View style={{alignItems: 'center'}}>
                <PriceCard
                title={navigation.getParam('title')}
                price={navigation.getParam('price')}
                description={navigation.getParam('description')}
                />
            </View>
        )
    }
}