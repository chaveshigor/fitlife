import React from 'react';
import { View, ScrollView, Text, AsyncStorage, TextInput, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';

//ACTIONS
import { editEmail, editPassword } from '../redux/actions/authActions';

//COMPONENTS
import Button from '../components/button';
import TwoChoicesButton from '../components/twoChoicesButton';

//CONFIGS
import colors from '../configs/colorsDefaut';
import styles from '../styles/registerStyle';
import api from '../configs/api';

export class Register extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    state = {
        name: '',
        confirmPassword: '',
        genre: '',
        born: '',
        profilePic: ''
    }

    async componentDidMount() {
        const latitude = await AsyncStorage.getItem('@location:latitude');
        const longitude = await AsyncStorage.getItem('@location:longitude');
        this.setState({latitude, longitude})
    }
    
    render() {

        const { name, confirmPassword, born } = this.state
        const { email, password } = this.props

        return(
            <View style={styles.container}>
            <ScrollView style={styles.scroll}>
            <View style={{width:'100%', alignItems:'center'}}>

                <View style={styles.buttonFb} >
                    <Button
                    text='CADASTRAR COM FACEBOOK'
                    color={colors.facebookBlue}
                    textColor={colors.white}
                    />
                </View>

                <View style={styles.infoBox}>

                    <View style={styles.inputs}>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconAntDesign
                                style={styles.icon}
                                name='user'
                                color={colors.baseOrange}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.setState({name: value})}
                            value={name}
                            placeholder='NOME'
                            placeholderTextColor={colors.baseOrange}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconMaterialComunity
                                style={styles.icon}
                                name='email-outline'
                                color={colors.baseOrange}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.editEmail(value)}
                            value={email}
                            placeholder='EMAIL'
                            placeholderTextColor={colors.baseOrange}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconFoundation
                                style={styles.icon}
                                name='lock'
                                color={colors.baseOrange}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.editPassword(value)}
                            value={password}
                            placeholder='SENHA'
                            placeholderTextColor={colors.baseOrange}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconFoundation
                                style={styles.icon}
                                name='lock'
                                color={colors.baseOrange}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.setState({confirmPassword: value})}
                            value={confirmPassword}
                            placeholder='CONFIRMAR SENHA'
                            placeholderTextColor={colors.baseOrange}
                            />
                        </View>
                        
                        <View style={styles.genre}>
                            <Text style={styles.genreText}>SOU</Text>
                            <TwoChoicesButton 
                            opt1='HOMEM' 
                            opt2='MULHER'
                            onPressOp1={()=>this.setState({genre: 'male'})}
                            onPressOp2={()=>this.setState({genre: 'female'})}
                            />
                        </View>
                        
                    </View>
            
                </View>

                <View style={styles.registerButton}>
                    <Button
                    text='CADASTRAR'
                    color={colors.white}
                    textColor={colors.baseOrange}
                    />
                </View>
    
            </View>
            </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    email: state.authReducer.email,
    password: state.authReducer.password
});

export default connect(mapStateToProps, { editEmail, editPassword })(Register)