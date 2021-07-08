import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Ex5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 6 kkkkkkk')}>
            Ir para o trabalho 6
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
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

export default Ex5;
