import React from 'react';
import { View, Text, Slider, AsyncStorage } from 'react-native';
import { Icon, Tooltip } from 'react-native-elements'

//REDUX
import { getlocationRadius } from '../redux/actions/userInfoActions';
import { connect } from 'react-redux';

//COMPONENTS
import Divider from '../components/divider';
import MenuItem from '../components/settingsMenu';

//STYLES
import styles from '../styles/settingsStyle';
import colors from '../configs/colorsDefaut';

export class Settings extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            //header: <Header title='Configurações' />,
            title: 'Settings',
            tabBarLabel: 'Configurações',
        }
      };

    async componentDidMount() {
        
    }

    handleLocationRadius = async(value) => {
        const distance = Math.floor(value)
        this.props.getlocationRadius(distance)
        await AsyncStorage.setItem('@locatianRadius', distance.toString())
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.about}>
                    <View style={styles.pic} />
                    <View style={styles.info}>
                        <Text style={styles.name}>JOÃOZINHO</Text>
                        <Text style={styles.bio}>Gosto de Batata</Text>
                    </View>
                </View>
            
                <Divider width={'100%'} />

                <View style={styles.sliderView}>
                    <Text>Raio de Localizacão</Text>
                    <View style={styles.sliderBar}>
                        <Slider
                        style={{width: '80%'}}
                        value={this.props.locationRadius}
                        minimumValue={1}
                        maximumValue={100}
                        minimumTrackTintColor={colors.baseOrange}
                        onValueChange={(value) => this.handleLocationRadius(value)}
                        />
                        <Text style={styles.slideDistance}>
                        {this.props.locationRadius}Km
                        </Text>
                    </View>
                </View>

                <Divider width={'100%'} />
                
                <View style={styles.menuOption}>
                    <MenuItem
                    option='Dados financeiros'
                    iconName='creditcard'
                    iconType='antdesign'
                    />
                    <MenuItem
                    option='Notificacões'
                    iconName='bells'
                    iconType='antdesign'
                    />
                    <MenuItem
                    option='Ganhe uma aula gratuida'
                    iconName='dollar-sign'
                    iconType='feather'
                    />
                    <MenuItem
                    option='Opcoes de pagamento'
                    iconName='creditcard'
                    iconType='antdesign'
                    />

                    
                </View>
                <Divider width={'100%'} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    locationRadius: state.userInfoReducer.locationRadius
    
});

export default connect( mapStateToProps, { getlocationRadius } )(Settings)