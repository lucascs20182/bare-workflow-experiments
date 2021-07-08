import React from 'react';

import {
  View, StyleSheet, Image, Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NewComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.infosPerfilEnfase}>
          Aumentador de Autoestimas
          <Ionicons name="md-checkmark-circle" size={16} color="green"
            style={styles.verifiedIcon} />
        </Text>

        <Image style={styles.imagemPerfil}
            source={require('../assets/ao-vivo-e-sem-cores.jpg')} />
        
        <Text style={styles.infosPerfil}>
            Sempre que você, garoto ou garota de programa, estiver sem
            autoestima e achando que o seu trabalho é ruim, 
          <Text style={styles.infosPerfilEnfase}> venha fazer uma viagem </Text>
          no meu trabalho que mal chega a 1 <AntDesign name="star" size={16} color="blue" />.
        </Text>

        <Text style={styles.infosPerfil}>
            Rie, zoa, saia daqui feliz pensando no quanto estava enganado
            e como existe gente como eu! 
        </Text>
        
        <Text style={styles.infosPerfilEnfase}>
            Mas se você é RH só to zoando, ok? hahaha
        </Text>

        <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 1 kkkkkkk')}>
            Ir para o trabalho 1
        </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  imagemPerfil: {
    width: 200, 
    height: 200, 
    borderRadius: 100,
    alignSelf: 'center',
    margin: 5
  },

  infosPerfil: {
    textAlign: 'justify',
    marginHorizontal: 10
  },

  infosPerfilEnfase: {
    fontWeight: 'bold'
  },

  verifiedIcon: {
    marginLeft: 5,
    marginTop: 1
  }
});

export default NewComponent;
