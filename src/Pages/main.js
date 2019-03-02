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
        list: null
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

    handleLocation = async() => {

        await navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
            
            this.props.getLocation(latitude, longitude)
            AsyncStorage.setItem('@location: latitude', latitude.toString())
            AsyncStorage.setItem('@location: longitude', longitude.toString())
            //INSERT THE COMMAND "IF" HERE TO VERIFY THE TYPE OF THE USER THAT IS TRYING TO SEARCH SOMEONE
        }, //SUCCESS
        
        async () => {
            Alert.alert('Para uma melhor experiência, por favor ative sua localização')
            AsyncStorage.getItem('@location: latitude')
            AsyncStorage.getItem('@location: longitude')
            
        },//ERROR
        
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
        await this.handleLocation()
    }

    render() {

        let { list } = this.state
        const { navigation, latitude, longitude, locationRadius } = this.props
        
        //IT WAS NECESSARY SEARCH HERE, NOT IN componentDidMount BECAUSE THE latitude
        //AND longitude WERE NOT DEFINED WHILE componentDidMount WAS RUNNING AND THAT 
        //WAS THE SOLUTION THA I FOUND THO SOLV THIS PROBLEM

        if(list == null) {
            if(typeof latitude !== 'undefined' ) {
                this.handleSearchPersonal(latitude, longitude, locationRadius)
            }
        }
        

        return(
            <View>
                <View>
                    <ListNearBy data={list} navigation={navigation} />
                </View>
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