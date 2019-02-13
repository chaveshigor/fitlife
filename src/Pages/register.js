import React from 'react';
import { View, ScrollView, Text, AsyncStorage, TextInput, TouchableNativeFeedback } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';

//COMPONENTS
import Button from '../components/button';
import TwoChoicesButton from '../components/twoChoicesButton';

//CONFIGS
import colors from '../configs/colorsDefaut';
import styles from '../styles/registerStyle';

export default class Register extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        genre: '',
        born: '',
        latitude: null,
        longitude: null,
        profilePic: ''
    }

    async componentDidMount() {
        const latitude = await AsyncStorage.getItem('@location:latitude');
        const longitude = await AsyncStorage.getItem('@location:longitude');
        this.setState({latitude, longitude})
    }
    
    render() {

        const { name, email, password, confirmPassword, born } = this.state

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
                            onChangeText={(value) => this.setState({email: value})}
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
                            onChangeText={(value) => this.setState({password: value})}
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