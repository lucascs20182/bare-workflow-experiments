import React, { useState } from 'react';

import {
  View, Text, StyleSheet, TouchableOpacity, Switch,
  // TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const CoreComponents = ({ navigation }) => {
  const [numero, setNumero] = useState(0);
  const [estaLigado, setEstaLigado] = useState(true);
  // const [texto, setTexto] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>O valor está em: {numero}</Text>
      
      { estaLigado ? 
      <>
        <TouchableOpacity style={styles.botaoProximo}
          onPress={() => setNumero(numero + 1)}>
            <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAnterior}
          onPress={() => setNumero(numero - 1)}>
            <Text style={styles.textoBotao}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoReset}
          onPress={() => setNumero(0)}>
            <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>
      </>

      :

      <>
        <TouchableOpacity disabled style={styles.botaoDisabled}
          onPress={() => setNumero(numero + 1)}>
            <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled style={styles.botaoDisabled}
          onPress={() => setNumero(numero - 1)}>
            <Text style={styles.textoBotao}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled style={styles.botaoDisabled}
          onPress={() => setNumero(0)}>
            <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>
      </>
      }
      
      { estaLigado ?
      // <Switch value={estaLigado} onValueChange={() => setEstaLigado(!estaLigado)} />
      <Switch value={estaLigado} onValueChange={setEstaLigado} />
      
      : 
      
      <TouchableOpacity style={styles.centralizado}>
        <Text>Habilite o switch para ter acesso aos botões</Text>
        <Switch value={estaLigado} onValueChange={setEstaLigado} />
      </TouchableOpacity>
      }

      {/* <TextInput value={texto} onChangeText={setTexto}
        placeholder="Insira sua idade" keyboardType="numeric"
        style={{backgroundColor: 'orange', width: '100%'}} />

      <Text>{`Deve trocar o valor aqui também: ${texto}`}</Text> */}

      <Icon.Button backgroundColor="#3b5998"
          onPress={() => navigation.navigate('Trabalho 9 kkkkkkk')}>
            Ir para o trabalho 9
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

  texto: {
    fontSize: 30,
  },

  textoBotao: {
    color: '#ddd',
    fontSize: 22,
    fontWeight: 'bold',
  },

  botaoProximo: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1459F7',
  },

  botaoAnterior: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
  },

  botaoReset: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F04335',
  },

  botaoDisabled: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#888',
  },

  centralizado: {
    alignItems: 'center'
  }
});

export default CoreComponents;
