import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, Number, NumberInput, StyleSheet } from 'react-native';
import {DADOS} from '../App';


export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lista: global.dados
    }


    if(this.props.route.params == null) {
      this.state = {
        nome:null,
        cpf:null,
        raacademico: null,
        datanascimento:null,
        turma:null
      }
    }else{
       for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome:global.dados[i].nome,
            cpf:global.dados[i].cpf,
            raacademico:global.dados[i].raacademico,
            datanascimento:global.dados[i].datanascimento,
            turma:global.dados[i].turma,

          }
        }
      }
    }
  }

  setNome = (text) => {
    this.setState({
      nome:text
    })
  }

  setCpf = (text) => {
    this.setState({
      cpf:text
    })
  }

  setRa = (text) => {
    this.setState({
      raacademico:text
    })
  }

  setDatanascimento = (text) => {
    this.setState({
      datanascimento:text
    })
  }

  setTurma = (text) => {
    this.setState({
      turma:text
    })
  }


  buttonSalvar = () => {
    if(this.props.route.params == null) {
      global.dados.push({
        nome:this.state.nome,
        cpf:this.state.cpf,
        raacademico:this.state.raacademico,
        datanascimento:this.state.datanascimento,
        turma:this.state.turma,
        id: new Date()  
      })
    }else{
      for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          global.dados[i].nome = this.state.nome,
          global.dados[i].cpf = this.state.cpf,
          global.dados[i].raacademico = this.state.raacademico,
          global.dados[i].datanascimento = this.state.datanascimento,
          global.dados[i].turma = this.state.turma
        }
      }
    }
    
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={css.letras}>Nome:</Text>
        <TextInput style={css.input} onChangeText={this.setNome} value={this.state.nome} placeholder="Digite o seu nome"/>
        <Text style={css.letras}>CPF:</Text>
        <TextInput style={css.input} onChangeText={this.setCpf} value={this.state.cpf} placeholder="Digite o seu CPF" />
        <Text style={css.letras}>RA academico:</Text>
        <TextInput style={css.input} onChangeText={this.setRa} value={this.state.raacademico} placeholder="Digite o seu RA"  />
        <Text style={css.letras}>Data Nascimento:</Text>
        <TextInput style={css.input} onChangeText={this.setDatanascimento} value={this.state.datanascimento} placeholder="Digite a sua Data de Nascimento" />
        <Text style={css.letras}>Turma:</Text>
        <TextInput style={css.input} onChangeText={this.setTurma} value={this.state.turma} placeholder="Digite a sua Turma" />
        <Button color="orange" title="Salvar" onPress={this.buttonSalvar} />
      </View>
    )
  }
}

const css = StyleSheet.create({
 letras:{
    fontSize: "18px",
    fontFamily: "Times new Roman",
    marginLeft: "10px"
  },

  input:{
    fontSize: "14px",
    marginLeft: "10px",
    color: "orange",
    marginBottom: "10px"
  }
})