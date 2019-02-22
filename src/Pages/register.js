import React from 'react';
import { View, ScrollView, Text, AsyncStorage, TextInput, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker'

//ICONS
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';

//REDUX
import { connect } from 'react-redux';
import { editEmail, editPassword } from '../redux/actions/authActions';
import { getName, getUserType, getGenre, getBorn } from '../redux/actions/userInfoActions';

//COMPONENTS
import Button from '../components/button';
import TwoChoicesButton from '../components/twoChoicesButton';
import Divider from '../components/divider';
import CheckBox from '../components/checkBox';

//CONFIGS
import colors from '../configs/colorsDefaut';
import styles from '../styles/registerStyle';
import terms from '../configs/termsOfUse';

export class Register extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    state = {
        confirmPassword: '',
        confirmTerms: false,
        modal: false
    }


    async componentDidMount() {
        //const latitude = await AsyncStorage.getItem('@location:latitude');
        //const longitude = await AsyncStorage.getItem('@location:longitude');
        //this.setState({latitude, longitude})
    }

    handleTerms = () => {
        if(this.state.confirmTerms === false){
            this.setState({confirmTerms: true})
        }else{
            this.setState({confirmTerms: false})
        }
    }

    
    render() {

        const { confirmPassword, confirmTerms } = this.state
        const { name, born, email, password } = this.props

        return(
            <View style={styles.container}>

            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
                <View style={styles.modal}>
                    <ScrollView>
                        <Text style={{fontSize: 18, alignSelf: 'center'}}>TERMOS DE USO</Text>
                        <Text>{terms}</Text>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 10}}>
                            <TouchableOpacity
                                onPress={() => {
                                this.setState({modal: !this.state.modal, confirmTerms: true});
                                }}>
                                <Text style={styles.buttonModal}>ACEITAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                this.setState({modal: !this.state.modal, confirmTerms: false});
                                }}>
                                <Text style={styles.buttonModal}>RECUSAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <ScrollView style={styles.scroll}>
            <View style={{width:'100%', alignItems:'center'}}>

                <Text style={styles.message}>SE APRESENTE PARA NÓS</Text>

                <View style={styles.divider}><Divider width='90%'/></View>

                <View style={styles.infoBox}>

                    <View style={styles.inputs}>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconAntDesign
                                style={styles.icon}
                                name='user'
                                color={colors.white}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.getName(value)}
                            value={name}
                            autoCorrect={false}
                            placeholder='NOME'
                            placeholderTextColor={colors.white}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconMaterialComunity
                                style={styles.icon}
                                name='email-outline'
                                color={colors.white}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.editEmail(value)}
                            value={email}
                            autoCorrect={false}
                            placeholder='EMAIL'
                            placeholderTextColor={colors.white}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconFoundation
                                style={styles.icon}
                                name='lock'
                                color={colors.white}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.props.editPassword(value)}
                            value={password}
                            placeholder='SENHA'
                            secureTextEntry={true}
                            placeholderTextColor={colors.white}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconFoundation
                                style={styles.icon}
                                name='lock'
                                color={colors.white}
                                size={25}
                                />
                            </View>

                            <TextInput
                            style={styles.inputText}
                            onChangeText={(value) => this.setState({confirmPassword: value})}
                            value={confirmPassword}
                            placeholder='CONFIRMAR SENHA'
                            secureTextEntry={true}
                            placeholderTextColor={colors.white}
                            />
                        </View>
                        
                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <IconAntDesign
                                style={styles.icon}
                                name='calendar'
                                color={colors.white}
                                size={25}
                                />
                            </View>

                            <DatePicker
                            style={{width: 250}}
                            date={born}
                            mode="date"
                            placeholder="SELECIONE SUA DATA DE NASCIMENTO"
                            format="YYYY-MM-DD"
                            minDate="1919-02-16"
                            maxDate="2001-02-16"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            showIcon={false}
                            onDateChange={(date) => {this.props.getBorn(date)}}
                            customStyles={{
                                dateInput: {
                                   alignItems: 'flex-start',
                                   borderColor: 'transparent'
                               },
                               dateText: {
                                   color: colors.white,
                                   fontSize: 12
                               },
                               placeholderText: {
                                color: colors.white,
                                fontSize: 12
                               }
                              }}
                            />
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.iconBox}>
                                <CheckBox 
                                size={24}
                                color={colors.white}
                                colorSelected={colors.green}
                                isSelected={confirmTerms}
                                onPress={this.handleTerms}
                                />
                            </View>
                                <View>
                                    <Text style={styles.inputText}>CONCORDO COM OS TERMOS DE USO</Text>
                                    <TouchableOpacity onPress={()=>{this.setState({modal: true})}}>
                                        <Text style={[styles.inputText, {fontWeight: 'bold'}]}>CLIQUE PARA LER</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>

                        <Divider width='100%'/>

                        <View style={styles.genre}>
                            <Text style={styles.genreText}>SOU</Text>
                            <View style={{width: '100%', alignItems: 'center'}}>
                                <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
                                    <TwoChoicesButton 
                                    opt1='HOMEM' 
                                    opt2='MULHER'
                                    width='80%'
                                    onPressOp1={()=>this.props.getGenre('male')}
                                    onPressOp2={()=>this.props.getGenre('female')}
                                    />
                                </View>
                                <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
                                    <TwoChoicesButton 
                                    opt1='CLIENTE' 
                                    opt2='PERSONAL'
                                    width='80%'
                                    onPressOp1={()=>this.props.getUserType('client')}
                                    onPressOp2={()=>this.props.getUserType('user')}
                                    />
                                </View>
                            </View>
                        </View>
                        
                    </View>
            
                </View>

                <View style={[styles.registerButton, {marginTop: 10}]}>
                    <Button
                    text='CADASTRAR'
                    color={colors.white}
                    textColor={colors.baseOrange}
                    />
                </View>

                <View style={{marginVertical: 10, flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems:'center'}}>
                    <Divider width='45%'/>
                        <Text style={{color: colors.white}}>OU</Text>
                    <Divider width='45%'/>
                </View>

                <View style={[styles.registerButton, {marginBottom: 10}]}>
                    <Button
                    text='CADASTRAR COM FACEBOOK'
                    color={colors.facebookBlue}
                    textColor={colors.white}
                    />
                </View>
    
            </View>
            </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    name: state.userInfoReducer.name,
    email: state.authReducer.email,
    password: state.authReducer.password,
    latitude: state.authReducer.latitude,
    longitude: state.authReducer.longitude,
    userType: state.userInfoReducer.userType,
    genre: state.userInfoReducer.genre,
    born: state.userInfoReducer.born
});

export default connect(mapStateToProps, { editEmail, editPassword, getUserType, getName, getGenre, getBorn })(Register)