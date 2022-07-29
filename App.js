import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

let timer = null;

let ss = 0;
let mm = 0;
let hh = 0;

function App () {
  const [number, setNumber] = useState('00:00:00');
  const [botao, setBotao] = useState('Começar');
  const [ultimo, setUltimo] = useState(null);

  function comecar() {
    if(timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao('Começar');
    } else {
      timer = setInterval(() => {
        ss++;

        if(ss == 60) {
          ss = 0;
          mm++;
        }

        if(mm == 60) {
          mm = 0;
          hh++;
        }

        let format = 
        (hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss);

        setNumber(format);

      }, 1000);
      setBotao('Parar');
    }
  }

  function parar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    setNumber('00:00:00');
    mm = 0;
    ss = 0;
    hh = 0;
    setUltimo(number)
    setBotao('Começar')
  }

  return (
    <View style={styles.container}>
      
      <Image 
      source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{number}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={comecar}>
          <Text style={styles.btntexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={parar}>
          <Text style={styles.btntexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaCorrida}>
        <Text style={styles.textoCorrido}> 
        {ultimo ? 'Ultimo tempo: ' + ultimo : ''}
        </Text>
      </View>

    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    marginTop: -170,
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btntexto: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 20
  },
  areaCorrida: {
    marginTop: 40,
  },
  textoCorrido: {
    fontSize: 25,
    color: 'white',
    fontStyle: 'italic'
  }
});

export default App;