import React from 'react';

import {
  View, StyleSheet, Image, Text, 
} from 'react-native';

// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.imagemPerfil}
            source={require('../assets/ao-vivo-e-sem-cores.jpg')} />

        <Text style={styles.infosPerfilEnfase}>
          Lucas da Silva Cruz
          {/* <Ionicons name="md-checkmark-circle" size={16} color="green"
            style={styles.verifiedIcon} /> */}
        </Text>
        
        <Text style={styles.infosPerfil}>
          <Text style={styles.infosPerfilEnfase}>Idade</Text>: 24
        </Text>
        
        <Text style={styles.infosPerfil}>
          <Text style={styles.infosPerfilEnfase}>Biografia</Text>: 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
          iusto aperiam autem deleniti, consequatur repudiandae pariatur 
          magni temporibus debitis minima dicta! Numquam inventore unde, 
          sapiente vero reiciendis exercitationem corporis! Fuga, voluptas 
          enim sequi qui dolore autem expedita praesentium reiciendis impedit 
          quidem dolores corrupti ullam maxime numquam aut accusantium 
          molestiae repudiandae.
        </Text>

        <Icon.Button name="facebook" backgroundColor="#3b5998">
          Adicione Lucas no Facebook
        </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 50
  },

  // style parecido com do google
  // de clicar no perfil à direita superior
  // para opções da conta de usuário
  imagemPerfil: {
    width: 70, 
    height: 70, 
    borderRadius: 100,
    alignSelf: 'flex-end',
    margin: 5
  },
  
  // sobrescreve primeiro estilo anterior
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

export default ImageComponent;
