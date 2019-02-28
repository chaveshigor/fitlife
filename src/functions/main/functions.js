import React from 'react';
import { AsyncStorage, Alert } from 'react-native';

export const handleLocation = async() => {

    const result = navigator.geolocation.getCurrentPosition(
    async ({ coords: { latitude, longitude } }) => {
        
        this.props.getLocation(latitude, longitude, this.props.locationRadius)
        console.log('sucesso')
    }, //SUCESSO
    
    async () => {
        Alert.alert('falha')
        
    },//ERRO
    
    {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
    }
    )
    
}
    
