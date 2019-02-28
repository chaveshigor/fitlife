import React from 'react';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

//ACTIONS
import { getLocation } from '../redux/actions/authActions';
import { getlocationRadius } from '../redux/actions/userInfoActions';

//CONFIGS
import colors from '../configs/colorsDefaut';

export class Loading extends React.Component {

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
                <ActivityIndicator size='large' color={colors.white} />
                <Text style={{color: colors.white}}>CARREGANDO...</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    locationRadius: state.userInfoReducer.locationRadius
});

export default connect(mapStateToProps, { getLocation, getlocationRadius })(Loading)