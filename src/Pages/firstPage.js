import React from 'react';
import { View, Text, TextInput, Image, AsyncStorage, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';


//ACTIONS
import { getLocation, editEmail, editPassword } from '../redux/actions/authActions';

//CONFIGS
import colors from '../configs/colorsDefaut';
import api from '../functions/apiActions';

//COMPONENTS
import Button from '../components/button';
import CheckBox from '../components/checkBox';

//STYLES
import styles from '../styles/firstPageStyle';

export class FirstPage extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return{
          header: null
        }
    }

    state = {
        errorPersonal:'',
        errorClient: '',
        error: '',
        token: '',
    }

    async componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                this.props.getLocation(latitude, longitude)
                await AsyncStorage.setItem('@location:latitude', latitude.toString())
                await AsyncStorage.setItem('@location:longitude', longitude.toString())
            }, //SUCESSO
            
            async () => {
                const latitude = await AsyncStorage.getItem('@location:latitude')
                const longitude = await AsyncStorage.getItem('@location:longitude')
                this.props.getLocation(latitude, longitude) //PEGA ULTIMA LOCALIZAÇAO
            },//ERRO
            
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        )
        this.props.editEmail('')
        
    }

    handleSelectClient = () => {
        this.setState({personalSelected: false, clientSelected: true})
    }

    handleSelectPersonal = () => {
        this.setState({personalSelected: true, clientSelected: false})
    }

    handleLogin = async() => {
        const { errorPersonal, errorClient, error } = this.state
        const { email, password, latitude, longitude } = this.props

        if(email.length > 0 && password.length > 0){
            
            try{
                const token = api.loginPersonal(email, password, latitude, longitude)
                this.setState({token: token}) //RECEBE TOKEN APOS LOGIN
                //this.props.getToken(token)
            }catch(error){
                let { message, field }  = error
                this.setState({errorPersonal: message})
            }
        
            try{
                const token = await api.loginClient(email, password, latitude, longitude)
                this.setState({token: token}) //RECEBE TOKEN APÓS LOGIN
                await AsyncStorage.setItem('@userActivity', 'Logged') //SETA ESTADO DE USER COMO LOGADO
                this.props.navigation.navigate('Logged')
            }catch(error){
                let  { message, field }  = error
                this.setState({errorClient: message})
            }

            if(errorPersonal.length != null && errorClient != null){
                this.setState({error: 'Email ou senha inválidos'})
            }
            
            
            }
        else{
            this.setState({error: 'PREENCHA EMAIL E SENHA'})
        }
        
    }

    handleSignIn = () => {
        this.props.navigation.navigate('Register')
    }


    render() {
        let { error, token } = this.state
        const { email, password } = this.props
        
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Image source={require('../images/logo.png')}/>
                
                <Text style={styles.appName}>FITLIFE</Text>
                
                <View style={styles.inputs}>
                    <View style={styles.inputBox}>
                        <View style={styles.iconBox}/* Icone*/>
                            <IconMaterialComunity
                            style={styles.icon}
                            name='email-outline'
                            color={colors.white}
                            size={25}
                            />
                        </View>

                        <View style={styles.inputTextBox}/* Input*/>
                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.editEmail(value)}
                            value={email}
                            placeholder='EMAIL'
                            placeholderTextColor={colors.white}
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            />
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                    <View style={styles.iconBox}/* Icone*/>
                        <Icon
                        style={styles.icon}
                        name='lock'
                        type='foundation'
                        color={colors.white}
                        size={25}
                        />
                    </View>

                    <View style={styles.inputTextBox}/* Input*/>
                        <TextInput
                        style={styles.inputText}
                        onChangeText={(value) => this.props.editPassword(value)}
                        value={password}
                        placeholder='SENHA'
                        placeholderTextColor={colors.white}
                        secureTextEntry={true}
                        textContentType='password'
                        />
                    </View>
                </View>
                </View>

                <View style={styles.buttons}>
                    <Button text='LOGIN' color={colors.white} textColor={colors.baseOrange} onPress={this.handleLogin}/>
                    <Button text='LOGIN COM FACEBOOK' color={colors.facebookBlue} textColor={colors.white}/>
                    <Text style={styles.error}>{error}</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <Text style={styles.register}>Ainda não é cadastrado? </Text>
                    <TouchableOpacity onPress={this.handleSignIn}>
                        <Text style={[styles.register, {fontWeight:'bold'}]}>
                            Clique aqui!
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => ({
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    email: state.authReducer.email,
    password: state.authReducer.password
});

export default connect(mapStateToProps, { getLocation, editEmail, editPassword })(FirstPage)