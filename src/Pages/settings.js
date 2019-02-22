import React from 'react';
import { View, Text } from 'react-native';

//COMPONENTS
import Divider from '../components/divider';

//STYLES
import styles from '../styles/settingsStyle';

export default class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            //header: <Header title='Configurações' />,
            title: 'Settings',
            tabBarLabel: 'Configurações',
        }
      };

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

            </View>
        )
    }
}