import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './components/index'
import Form from './components/form'
import Home from './components/home'
import Form2 from './components/form2'
import Home2 from './components/home2'


global.dados = []

const Stack = createNativeStackNavigator()

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen name="index" component={Index} options={{ title:"Menu Principal"}} />
          <Stack.Screen name="form" component={Form} options={{ title:"Cadastrar Professor"}} />
          <Stack.Screen name="home" component={Home} options={{ title:"Lista de Professores"}} />
          <Stack.Screen name="form2" component={Form2} options={{ title:"Cadastrar Aluno"}} />
          <Stack.Screen name="home2" component={Home2} options={{ title:"Lista de Alunos"}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}





