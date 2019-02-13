import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/header';

export default class MyPersonal extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return{
      //header: <Header title='Meus Personais' />,
      title: 'Meus Personais',
      tabBarLabel:'Localizar'
    }
  };

  render() {
    return (
        <Text>Meus persoais</Text>
    );
  }
}
