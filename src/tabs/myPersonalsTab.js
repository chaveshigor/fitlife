import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

//CONFIGS
import colors from '../configs/colorsDefaut';
//PAGES
import FavoritPersonals from '../Pages/favoritPersonals';
import HiredPersonals from '../Pages/hiredPersonals';

const PersonalsTabNavigatior = createMaterialTopTabNavigator({
    
    Favoritos: {
        screen: FavoritPersonals
    },
    Contratados: {
        screen: HiredPersonals
    }

},
    {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: colors.baseOrange,
            },
        },
    }
)

const Navigator =  createAppContainer(PersonalsTabNavigatior);


export default class PersonalTab extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            title:'Meus Personais',
            headerStyle:{
                backgroundColor: colors.baseOrange,
                elevation: 0
            },
              
            headerTintColor: '#fff',
        }
    }
    render(){
        return(
            <Navigator/>
        )
    }
}
