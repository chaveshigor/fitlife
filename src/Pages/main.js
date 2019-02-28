import React from 'react';
import { View, Text, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';

//ACTIONS
import { getLocation } from '../redux/actions/authActions';
import { getlocationRadius } from '../redux/actions/userInfoActions';

//COMPONENTS
import ListNearBy from '../components/listNearBy';

//CONFIGS
import api from '../functions/apiActions';

//FUNCTIONS
import { handleLocation } from '../functions/main/functions'

export class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Localizar',
            tabBarLabel:'Localizar',
        }
      };

    state = {
        list: null,
        teste: null,
        latitude: null, 
        longitude: null
    }

    handleRadiusLocation = async() => {
        const locationRadius = await AsyncStorage.getItem('@locatianRadius')
        //SETAR RAIO DE LOCALIZACAO
        if(locationRadius == null ){
            this.props.getlocationRadius(10)
        }else{
            this.props.getlocationRadius(parseInt(locationRadius))
        }
    }

    handleSearch = async() => {

        navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
            
            this.props.getLocation(latitude, longitude)
            //INSERT IF HERE TO VERIFY THE TYPE OF THE USER THAT IS TRYING TO SEARCH SOMEONE
            this.handleSearchPersonal(latitude, longitude, this.props.locationRadius)
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

    handleSearchPersonal = async(latitude, longitude, distance) => {
        const data = await api.showPersonalNearby(latitude, longitude, distance)
        this.setState({list: data})
    }

    handlePersonalLogin = async() => {
    }
    
    async componentDidMount() {
        
        await this.handleRadiusLocation()
        await this.handleSearch()
    }

    render() {

        let { list } = this.state
        const { navigation } = this.props

        return(
            <View>
                <View>
                    <ListNearBy data={list} navigation={navigation} />
                </View>
                <Text>{this.state.latitude}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    locationRadius: state.userInfoReducer.locationRadius
});

export default connect(mapStateToProps, { getLocation, getlocationRadius })(Main)