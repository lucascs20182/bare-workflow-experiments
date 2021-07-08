import React from 'react';
import { View, StyleSheet } from 'react-native';

const PrimeiroDesafio = () => {
    return (
        <View style={styles.container}>
            <View style={styles.retanguloSuperior} />

            <View style={styles.containerQuadradoERetangulo}>
                <View style={styles.quadrado} />
                <View style={styles.retangulo1} />
            </View>
            
            <View>
            <View style={styles.containerRetangulos}>
                <View style={styles.retangulo2} />
                <View style={styles.retangulo3} />
            </View>
            <View style={styles.separador} />
            </View>

            <View style={styles.containerLinha}>
                <View style={styles.quadrado} />
                <View style={styles.quadrado} />
                <View style={styles.quadrado} />
            </View>

            <View style={styles.containerLinha}>
                <View style={styles.quadrado} />
                <View style={styles.quadrado} />
                <View style={styles.quadrado} />
            </View>

            <View style={styles.retanguloInferior} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    retanguloSuperior: {
        height: 25,
        backgroundColor: '#50E3C2'
    },

    quadrado: {
        width: 100,
        height: 100,
        backgroundColor: '#F5A623'
    },

    retangulo1: {
        height: 30,
        backgroundColor: '#F5A623',
        marginTop: 23,
        width: 150
    },

    containerQuadradoERetangulo: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerQuadrados: {
        justifyContent: 'space-around',
    },

    containerLinha: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    containerRetangulos: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    retangulo2: {
        height: 78,
        flex: 1,
        backgroundColor: '#9013FE'
    },

    retangulo3: {
        height: 78,
        flex: 1,
        backgroundColor: '#4A90E2'
    },

    separador: {
        height: 13,
        backgroundColor: '#50E3C2'
    },

    retanguloInferior: {
        height: 60,
        backgroundColor: '#4A90E2'
    },
});

export default PrimeiroDesafio;
