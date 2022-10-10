import React, { Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
 
class CadastrarJogador extends Component{
 
 state = {
  jogador: '',
 }

 onChangeText = (nomeJogador) => {
      this.setState({jogador: nomeJogador})
  }

 submit = () => {
   if (this.state.jogador === ''){
    Alert.alert(
      'Erro!',
      'Preencha o seu nome, por favor.',
      [
        {
          text: 'OK',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        }
      ]
    )
    return
   }
   const jogador = {
     jogador: this.state.jogador
   }
   this.props.cadastrar(jogador)
   this.setState({
    jogador: '',
   })
 }

 render() {
   return (
     <View style={styles.container}>
       <Image style={styles.imagemJogo} source={require('./jogo-da-forca.png')}/>
       <Text style={styles.TextoPrincipal}>Jogo da Forca</Text>
       <Text style={styles.TextoSecundario}>Cadastrar Jogador</Text>
       <TextInput
         placeholder='Digite seu nome aqui'
         onChangeText={val => this.onChangeText(val)}
         style={styles.input}
         value={this.state.jogador}
       />
       <TouchableOpacity onPress={this.submit}>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>Jogar</Text>
        </View>
       </TouchableOpacity>
     </View>
   )
 }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c5c84',
  },
  imagemJogo:{
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: '20%',
  },
  TextoPrincipal: {
    color: '#f4f0d9',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: '2%',
    alignSelf: 'center',
  },
  TextoSecundario: {
    color: 'white',
    fontSize: 25,
    marginTop: '15%',
    marginLeft: '7%',
  },
  input: {
    marginHorizontal: '5%',
    marginVertical: '3%',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
    borderRadius: 5,
    fontStyle: 'italic',
  },
 botao: {
    marginHorizontal: '5%',
    paddingHorizontal: 8,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#d68d3c',
    justifyContent: 'center',
    alignItems: 'center',
 },
 textoBotao: {
   color: 'white',
   fontSize: 18
 },
})
 
export default CadastrarJogador