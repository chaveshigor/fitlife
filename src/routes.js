import React from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//PAGES
import GuestStack from './stacks/guestStack';
import TabNavigator from './tabs/tabNavigator';
import Loading from './Pages/loading';


//VERIFICAR SE JÁ LOGOU ANTES

loggedIn = async() => {
    //await AsyncStorage.removeItem('@userActivity')
    //const userStatus = await AsyncStorage.getItem('@userActivity')
    //console.log(userStatus)
    if(userStatus === 'Logged'){
        console.log('entrou no if')
        return 'Logged'
    }else{
        return 'Guest'
    }
}


const Routes = createSwitchNavigator({
    Loading: {
        screen: Loading
    },
    Logged: {
        screen: TabNavigator
    },
    Guest: {
        screen: GuestStack
    },

}, {
    //initialRouteName: loggedIn() === 'Logged' ? 'Logged' : 'Guest'
})

export default createAppContainer(Routes);