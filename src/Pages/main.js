import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

//COMPONENTS
import ListNearBy from '../components/listNearBy';

//CONFIGS
import api from '../functions/apiActions';

export default class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
            //header: <Header title='Localizar' />,
            title: 'Localizar',
            tabBarLabel:'Localizar',
        }
      };

    state = {
        list: null,
        latitude: null,
        longitude: null
    }

    async componentDidMount() {
        
        const lat = await AsyncStorage.getItem('@location:latitude')
        const long = await AsyncStorage.getItem('@location:longitude')
        this.setState({latitude:lat, longitude:long})
        
        const { latitude, longitude } = this.state

        const users = await api.showNearBy(latitude, longitude)
        this.setState({list: users})

    }

    render() {

        let { list } = this.state
        const { navigation } = this.props

        return(
            <View>
                <View>
                    <ListNearBy data={list} navigation={navigation} />
                </View>
            </View>
        )
    }
}