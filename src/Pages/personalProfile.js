import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Rating } from 'react-native-elements';

//ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//COMPONENTS
import ShowServices from '../components/showServices';

//STYLES
import styles from '../styles/personalProfileStyle';
import colors from '../configs/colorsDefaut';

export default class PersonalProfile extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: navigation.getParam('name'),
      tabBarLabel:'Localizar',
    }
  };

  state={
    name: this.props.navigation.getParam('name'),
    services: this.props.navigation.getParam('my_services')
  }

  componentDidMount () {
    console.log(this.state.services)
  }
  render() {

    const { services } = this.state;
    const { navigation } = this.props;

    const profilePicture = navigation.getParam('profilePicture')
    const id = navigation.getParam('id')

    return (
        <View style={styles.container}>

          <View style={styles.about}>

          {
                profilePicture == null ?
                <View style={styles.picture}/> :
                <Image
                style={styles.picture}
                source={{uri: `http://192.168.0.104:3333/session/personalpicture/${id}`}}
                />
            }
            <View style={styles.rating}>
              <Rating
              type='star'
              count={5}
              reviews={["Blé", "Ruinzinho", "Pode Melhorar", "Bom", "Perfeito"]}
              startingValue={4.7}
              imageSize={35}
              readonly={true}
              />
              <Text>Nota: 4.7</Text>
            </View>

          </View>

          <View style={styles.divider}/>

          <ScrollView style={{width:'100%', height: '75%'}}>
          <View style={{width:'100%', alignItems: 'center'}}>

          <View style={styles.description}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.bio}>{navigation.getParam('description')}</Text>
            </View>

            <View style={styles.divider} /* VERIFICAR SE DEIXO OU NAO AQUI*/ />

            <View style={styles.services}>
              <Text style={styles.name}>AULAS</Text>
              <ShowServices data={services} navigation={navigation}/>
            </View>

          </View>
          </ScrollView>

        </View>
    );
  }
}
