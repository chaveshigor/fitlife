import React from 'react';
import { View, Text, TextInput, Image, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

//CONFIGS
import colors from '../configs/colorsDefaut';
import api from '../functions/apiActions';
import axios from '../configs/api'; //REMOVER DEPOIS


//COMPONENTS
import Button from '../components/button';
import CheckBox from '../components/checkBox';
import TwoChoicesButton from '../components/twoChoicesButton';

//STYLES
import styles from '../styles/firstPageStyle';

export default class FirstPage extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return{
          header: null
        }
    }

    state = {
        email: '',
        password: '',
        latitude: null,
        longitude: null,
        personalSelected: false,
        clientSelected: false,
        error:'',
        token: '',
    }

    async componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                this.setState({latitude, longitude})
                await AsyncStorage.setItem('@location:latitude', latitude.toString())
                await AsyncStorage.setItem('@location:longitude', longitude.toString())
            }, //SUCESSO
            
            async () => {
                const latitude = await AsyncStorage.getItem('@location:latitude')
                const longitude = await AsyncStorage.getItem('@location:longitude')
                this.setState({latitude, longitude}) //PEGA ULTIMA LOCALIZAÇAO
            },//ERRO
            
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        )
    }

    handleSelectClient = () => {
        this.setState({personalSelected: false, clientSelected: true})
    }

    handleSelectPersonal = () => {
        this.setState({personalSelected: true, clientSelected: false})
    }

    handleLogin = async() => {
        const { email, password, personalSelected, clientSelected, latitude, longitude } = this.state

        if(email.length > 0 && password.length > 0){
            if(personalSelected === true){
                try{
                    const token = api.loginPersonal(email, password, latitude, longitude)
                    this.setState({token: token}) //RECEBE TOKEN APOS LOGIN
                }catch(error){
                    let { message, field }  = error
                    this.setState({error: message})
                }
            }
            else if(clientSelected === true){
                try{
                    const token = await api.loginClient(email, password, latitude, longitude)
                    this.setState({token: token}) //RECEBE TOKEN APÓS LOGIN
                    await AsyncStorage.setItem('@userActivity', 'Logged') //SETA ESTADO DE USER COMO LOGADO
                    this.props.navigation.navigate('Logged')
                }catch(error){
                    let  { message, field }  = error
                    this.setState({error: message})
                }
            }
            else{
                this.setState({error: 'SELECIONE TIPO DE USUÁRIO'})
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

        let { email, password, personalSelected, clientSelected, error, token, latitude, longitude } = this.state

        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Image source={require('../images/logo.png')}/>
                
                <Text style={styles.appName}>FITLIFE</Text>

                <Text style={styles.error}>{error}</Text>
                
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
                            onChangeText={(value) => this.setState({email: value})}
                            value={email}
                            placeholder='EMAIL'
                            placeholderTextColor={colors.white}
                            textContentType='emailAddress'
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
                        onChangeText={(value) => this.setState({password: value})}
                        value={password}
                        placeholder='SENHA'
                        placeholderTextColor={colors.white}
                        secureTextEntry={true}
                        textContentType='password'
                        />
                    </View>
                </View>
                </View>

                <View style={{width: '80%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: 5}}>
                    <CheckBox
                    title='Aluno'
                    isSelected={clientSelected}
                    onPress={this.handleSelectClient}
                    size={24}
                    color={colors.white}
                    colorSelected={colors.green}
                    />

                    <CheckBox
                    title='Personal'
                    isSelected={personalSelected}
                    onPress={this.handleSelectPersonal}
                    size={24}
                    color={colors.white}
                    colorSelected={colors.green}
                    />
                </View>

                <View style={styles.buttons}>
                    <Button text='LOGIN' color={colors.white} textColor={colors.baseOrange} onPress={this.handleLogin}/>
                    <Button text='CADASTRE-SE' color={colors.white} textColor={colors.baseOrange} onPress={this.handleSignIn}/>
                    <Button text='LOGIN COM FACEBOOK' color={colors.facebookBlue} textColor={colors.white}/>
                </View>
                
            </KeyboardAvoidingView>
        )
    }
}