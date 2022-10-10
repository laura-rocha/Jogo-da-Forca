import React, { Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CadastrarJogador from './CadastrarJogador';
import ManualJogo from './ManualJogo';
import TelaJogoDaForca from './TelaJogoDaForca';
 
const Tab = createMaterialBottomTabNavigator()

export default class App extends Component{
 
  constructor(){
    super()
    this.state = {
      jogadorCadastrado: false,
      jogador: ''
    }
    this.addJogador = this.addJogador.bind(this)
    this.deleteJogador = this.deleteJogador.bind(this)
  }
  
  addJogador = (player) => {
    this.setState({
      jogadorCadastrado: true,
      jogador: player.jogador,
    })
  }

  deleteJogador = () => {
    this.setState({
      jogadorCadastrado: false,
      jogador: '',
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Novo estado do app.js: ', this.state)
  }
   
  render(){
    return(
      <NavigationContainer>
        {this.state.jogadorCadastrado ?                                   //se o jogador já foi cadastrado, vamos iniciar o jogo
          <Tab.Navigator 
            inactiveColor='rgba(255, 255, 255, 0.5)' 
            activeColor='#fff'
            barStyle={{ backgroundColor: '#1c5c84',
                        alignItems: 'center',
                        justifyContent: 'center'}}
            labeled={false}
          >
            <Tab.Screen 
              name='Jogar'
              options={{
                tabBarLabel: 'Jogar',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="gamepad-variant-outline" color={color} size={24} />
                ),
              }}
            >
              {props => <TelaJogoDaForca {...props} nomeJogador={this.state.jogador} deslogar={this.deleteJogador}/>}
            </Tab.Screen>
          </Tab.Navigator>
        :                                                                 //se o jogador ainda não foi cadastrado, vamos mostrar a tela de cadastro
        <Tab.Navigator 
          inactiveColor='rgba(255, 255, 255, 0.5)' 
          activeColor='#fff'
          barStyle={{ backgroundColor: '#1c5c84',
                      alignItems: 'center',
                      justifyContent: 'center'}}
          labeled={false}
        >
            <Tab.Screen
              name='Cadastrar Jogador'
              options={{
                tabBarLabel: 'Cadastrar Jogador',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            >
              {props => <CadastrarJogador {...props} cadastrar={this.addJogador}/>}
            </Tab.Screen>
            <Tab.Screen 
              name='Como jogar' 
              component={ManualJogo}
              options={{
                tabBarLabel: 'Cadastrar Jogador',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="information" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        }  
      </NavigationContainer>
    )
  }
 }
 