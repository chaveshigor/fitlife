import React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';

//CONFIGS
import colors from '../configs/colorsDefaut';

export default class Loading extends React.Component {
  
    async componentDidMount() {
        const userStatus = await AsyncStorage.getItem('@userActivity')
        //console.log(userStatus)
        
        if(userStatus === 'Logged'){
            this.props.navigation.navigate('Logged')
        }else{
            this.props.navigation.navigate('Guest')
        }
        
    }
    
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.baseOrange}}>
                <ActivityIndicator size={100} color={colors.white} />
                <Text style={{color: colors.white}}>CARREGANDO...</Text>
            </View>
        )
    }
}