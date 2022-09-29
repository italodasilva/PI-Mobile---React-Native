import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, Number, NumberInput, StyleSheet } from 'react-native';
import {DADOS} from '../App';


export default class Form extends React.Component {

  constructor(props) {
    super(props)


    if(this.props.route.params == null) {
      this.state = {
        nome:null,
        cpf:null,
        disciplina:null,
        raadmin:null
      }
    }else{
       for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          this.state = {
            nome:global.dados[i].nome,
            preco:global.dados[i].cpf,
            quantidade:global.dados[i].disciplina,
            raadmin:global.dados[i].raadmin,
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

  setDisciplina = (text) => {
    this.setState({
      disciplina:text
    })
  }

  setRaadmin = (text) => {
    this.setState({
      raadmin:text
    })
  }


  buttonSalvar = () => {
    if(this.props.route.params == null) {
      global.dados.push({
        nome:this.state.nome,
        cpf:this.state.cpf,
        disciplina:this.state.disciplina,
        raadmin:this.state.raadmin,
        id: new Date()  
      })
    }else{
      for(i=0;i<global.dados.length;i++) {
        if(global.dados[i].id == this.props.route.params.id) {
          global.dados[i].nome = this.state.nome,
          global.dados[i].cpf = this.state.cpf,
          global.dados[i].disciplina = this.state.disciplina,
          global.dados[i].raadmin = this.state.raadmin
        }
      }}
    
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text style={css.letras}>Nome:</Text>
        <TextInput style={css.textinput} placeholder="Digite o nome do professor" onChangeText={this.setNome} value={this.state.nome}/>
        <Text style={css.letras}>CPF:</Text>
        <TextInput placeholder="Digite o CPF do servidor" style={css.textinput} onChangeText={this.setCpf} value={this.state.cpf} />
        <Text style={css.letras}>Disciplina:</Text>
        <TextInput placeholder="Digite a disciplina que o professor atua" style={css.textinput} onChangeText={this.setDisciplina} value={this.state.disciplina} />
        <Text style={css.letras}>Matricula do servidor:</Text>
        <TextInput placeholder="Matricula para cadastramento do servidor" style={css.textinput} onChangeText={this.setRaadmin} value={this.state.raadmin} />
        <Button color="black" title="Salvar" onPress={this.buttonSalvar} />
      </View>
    )
  }
}

const css = StyleSheet.create({
 letras:{
    fontSize: "18px",
    marginLeft: "15px",
    fontFamily: "Times new Roman"
  },

  textinput:{
    color: "green",
    marginBottom: "20px",
    marginLeft: "15px",
    borderColor: "green"
  }
})