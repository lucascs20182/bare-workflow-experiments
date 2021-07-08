import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Ex6 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.box1} />
                <View style={styles.box1} />
                <View style={styles.box1} />
            </View>

            <View style={styles.row}>
                <View style={styles.box2} />
                <View style={styles.box2} />
                <View style={styles.box2} />
            </View>

            <View style={styles.row}>
                <View style={styles.box3} />
                <View style={styles.box3} />
                <View style={styles.box3} />
            </View>

            <View style={styles.row}>
                <View style={styles.box4} />
                <View style={styles.box4} />
                <View style={styles.box4} />
            </View>

            <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 7 kkkkkkk')}>
            Ir para o trabalho 7
            </Icon.Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    },

    box4: {
        width: 116,
        height: 116,
        backgroundColor: '#F5A623'
    }
});

export default Ex6;
