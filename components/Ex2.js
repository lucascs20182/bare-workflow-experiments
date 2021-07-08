import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Ex2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />

      <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 3 kkkkkkk')}>
            Ir para o trabalho 3
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },

  box1: {
    flex: 1,
    height: '20%',
    
    backgroundColor: '#50E3C2'
  }
});

export default Ex2;
