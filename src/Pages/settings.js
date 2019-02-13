import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/header';

export default class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            //header: <Header title='Configurações' />,
            title: 'Settings',
            tabBarLabel: 'Configurações',
        }
      };

    render() {
        return(
            <View>
                <Text>Settings</Text>
            </View>
        )
    }
}