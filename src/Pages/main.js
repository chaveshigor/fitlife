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

export class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
            //header: <Header title='Localizar' />,
            title: 'Localizar',
            tabBarLabel:'Localizar',
        }
      };

    state = {
        list: null
    }

    handleLocation = async() => {
        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                await this.props.getLocation(latitude, longitude)
                const users = await api.showNearBy(latitude, longitude)
                this.setState({list: users})
                await AsyncStorage.setItem('@location:latitude', latitude.toString())
                await AsyncStorage.setItem('@location:longitude', longitude.toString())
            }, //SUCESSO
            
            async () => {
                Alert.alert('Houve um problema ao verificar sua localização. Sua última localização registrada será utilizada')
                const latitude = await AsyncStorage.getItem('@location:latitude')
                const longitude = await AsyncStorage.getItem('@location:longitude')
                await this.props.getLocation(latitude, longitude) //PEGA ULTIMA LOCALIZAÇAO
            },//ERRO
            
            {
                timeout: 3000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        )
    }

    async componentDidMount() {
        
        await this.handleLocation()

        const locationRadius = parseInt(await AsyncStorage.getItem('@locatianRadius'))
        this.setState({teste: locationRadius})
        
        //SETAR RAIO DE LOCALIZACAO
        if(locationRadius === null){
            this.props.getlocationRadius(10)
        }else{
            this.props.getlocationRadius(locationRadius)
        }
        
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

const mapStateToProps = (state) => ({
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    locationRadius: state.userInfoReducer.locationRadius
});

export default connect(mapStateToProps, { getLocation, getlocationRadius })(Main)