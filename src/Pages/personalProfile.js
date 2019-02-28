import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';

//ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//COMPONENTS
import Header from '../components/header';
import ShowServices from '../components/showServices';

//STYLES
import styles from '../styles/personalProfileStyle';
import colors from '../configs/colorsDefaut';

export default class PersonalProfile extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      //header: <Header title='Nome do Personal' backButton={true} navigation={navigation} />,
      title: navigation.getParam(name),
      tabBarLabel:'Localizar',
    }
  };

  state={
    name: this.props.navigation.getParam(name),
    services: [{key:'1', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'2', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'3', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'4', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'5', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'6', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'7', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'8', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'9', name: 'MUSCULAÇÃO', description: 'Treinamento de musculação'},
              {key:'10', name: 'MUSCULAÇÃOFinal', description: 'Treinamento de musculação'},]
  }

  render() {

    const { services } = this.state;
    const { navigation } = this.props;

    return (
        <View style={styles.container}>

          <View style={styles.about}>

            <View style={styles.picture} />
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
              <Text style={styles.bio}>Descrição interessante aqui</Text>
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
