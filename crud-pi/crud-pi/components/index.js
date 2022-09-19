import React, {useState, useEffect } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export const DADOS = React.createContext([])

export default class Index extends React.Component{

  buttonAddAlu = () => {
    this.props.navigation.push("home2")
  }

  buttonAddProf = () => {
    this.props.navigation.push("home")
  }

  render() {
    return (
      <View>
        <Button style={css.button} color="green" title="Adicionar Aluno" onPress={this.buttonAddAlu}/>
        <Text style={css.aluno}></Text>
        <Button color="black" title="Adicionar Professor" onPress={this.buttonAddProf}/>
      </View>
    )
  }
}

const css = StyleSheet.create({
  aluno:{
    marginBottom: '15px',
  },

  button:{
    padding: "5px 10px"
  }

})