import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
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
