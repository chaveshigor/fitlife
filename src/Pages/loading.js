import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class Loading extends React.Component {
  
    async componentDidMount() {
        const userStatus = await AsyncStorage.getItem('@userActivity')
        console.log(userStatus)
        if(userStatus === 'Logged'){
            this.props.navigation.navigate('Logged')
        }else{
            this.props.navigation.navigate('Guest')
        }
    }
    
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Carregando...</Text>
            </View>
        )
    }
}