import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Ex3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 4 kkkkkkk')}>
            Ir para o trabalho 4
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2'
  },

  box2: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2'
  },

  box3: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE'
  }
});

export default Ex3;
