import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Ex1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />

      <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 2 kkkkkkk')}>
            Ir para o trabalho 2
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  box1: {
    flex: 1,
    backgroundColor: '#50E3C2',
    width: '25%'
  }
});

export default Ex1;
