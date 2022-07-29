import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function List({ data }) {
  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={{ fontSize: 17, marginLeft: 5, fontWeight: 'bold' }}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }
 
  return (
    <View style={styles.list}>
   
      <View style={styles.viewPerfil}>
        <Image 
        style={styles.fotoPerfil}
        source={{ uri: data.imgperfil }} />
        
        <Text style={styles.nomeUsuario}>{data.nome}</Text>
      </View>
   
      <Image
      resizeMode='cover'
      source={{ uri: data.imgPublicacao }}
      style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
          source={data.likeada ? require('../img/likeada.png') : 
          require('../img/like.png')}
          style={styles.iconelike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
          source={require('../img/comment.png')}
          style={styles.iconelike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
          source={require('../img/send.png')}
          style={styles.iconelike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes(data.likers)}

      <Text style={styles.nomeRodape}>
        {data.nome}
      </Text>

      <Text style={styles.descricao}>
        {data.descricao}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000'
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconelike: {
    width: 25,
    height: 25
  },
  btnsend: {
    paddingLeft: 5
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  descricao: {
    paddingLeft: 7,
    fontSize: 18,
    paddingBottom: 10
  }
});