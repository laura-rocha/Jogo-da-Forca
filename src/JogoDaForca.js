import React, { Component} from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'

import BotaoTeclado from './BotaoTeclado';

const img = [
              require('./Bonequinho/0.png'),
              require('./Bonequinho/1.png'),
              require('./Bonequinho/2.png'),
              require('./Bonequinho/3.png'),
              require('./Bonequinho/4.png'),
              require('./Bonequinho/5.png'),
              require('./Bonequinho/6.png'),
              require('./Bonequinho/7.png'),
              require('./Bonequinho/8.png'),
              require('./Bonequinho/9.png'),
              require('./Bonequinho/10.png')
            ]

const bancoDicas = ['COMIDA', 'OBJETO', 'ANIMAL']
const bancoPalavras = [ ['ABACATE', 'AVEIA', 'BANANA', 'BIFE', 'CACAU', 'CENOURA', 'DAMASCO', 'DOCE', 'EMPADA', 'ERVILHA', 'FAROFA', 'FEIJOADA', 'GENGIBRE', 'GOIABA', 'HOT DOG', 'IOGURTE', 'JACA', 'JUJUBA', 'LAGOSTA', 'LEITE', 'MANGA', 'MEXIXE', 'NABO', 'NHOQUE', 'OMELETE', 'QUIABO', 'QUEIJO', 'REPOLHO', 'SALAME', 'SOJA', 'TORRADA', 'TORANJA', 'UVA', 'WAFFLE'],
                        ['AGULHA', 'ALMOFADA', 'ANEL', 'BACIA', 'CABIDE', 'CAPACETE', 'COLHER', 'DADO', 'DIAMENTE', 'DISCO', 'DRONE', 'ESMALTE', 'ESTOJO', 'EXTINTOR', 'FACA', 'FERRO', 'FLECHA', 'FOLHA', 'GAIOLA', 'GARFO', 'GRAMPO', 'HARPA', 'HASTE', 'INGRESSO', 'ISQUEIRO', 'JALECO', 'JARRO', 'LACRE', 'LONA', 'LUSTRE', 'MALA', 'MARTELO', 'MOUSE', 'NOTEBOOK', 'OURO', 'PALITO', 'PERUCA', 'PLACA', 'PONTEIRO', 'QUADRO', 'RALADOR', 'REVISTA', 'RODA', 'SACOLA', 'SERROTE', 'SIRENE', 'TAMPA', 'TELHA', 'TORNEIRA', 'URNA', 'VELA', 'VESTIDO', 'WEBCAM', 'XADREZ', 'XAMPU', 'XAROPE'],
                        ['ABELHA', 'ALCE', 'BAIACU', 'BODE', 'CAMELO', 'CAVALO', 'DONINHA', 'ELEFANTE', 'FOCA', 'GAIVOTA', 'GATO', 'GRILO', 'JAVALI', 'LESMA', 'LOBO', 'MACACO', 'MOSCA', 'OVELHA', 'PANDA', 'PATO', 'POLVO', 'PORCO', 'RAPOSA', 'SAPO', 'SIRI'],
                      ]

export default class JogoDaForca extends Component{

  constructor(){
    super()
    const indiceDica = Math.floor(Math.random() * bancoDicas.length)
    const indicePalavra = Math.floor(Math.random() * bancoDicas[indiceDica].length);

    const dicaPalavraChave = bancoDicas[indiceDica]
    const palavraChave = bancoPalavras[indiceDica][indicePalavra]        //essa é a palavra que o usuário tem que advinhar
    const palavraChaveArray = palavraChave.split('')                     //transformando a palavra chave em um array de caracteres

    console.log('Dica: ', dicaPalavraChave)
    console.log('Palavra Chave: ', palavraChave)
    console.log('Palavra Chave Array: ', palavraChaveArray)

    let array = new Array(palavraChaveArray.length).fill('')
    
    if(palavraChave.includes(' ')){
      let qtdLetra = this.contaLetraNoArray(palavraChaveArray, ' ')     //quantas vezes a letra selecionada aparece na palavra
      let pontoInicial = 0

      while(qtdLetra != 0){
        array[palavraChaveArray.indexOf(' ', pontoInicial)] = ' '
        pontoInicial = palavraChaveArray.indexOf(' ', pontoInicial) + 1
        qtdLetra--
      }
    }
    this.state = {
      erros: 0,
      palavraArray: array,                                               //essa é a palavra (em formato de array) que o usuário está formando conforme insere letras
      letrasJaEscolhidas: new Array(),
      dicaPalavraChave,
      palavraChave,
      palavraChaveArray
    }
  }

  contaLetraNoArray(array, letra){
    let qtd = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] === letra)
        qtd++
    }
    return qtd
  }

  setaLetra(letra){
    const {palavraChave, palavraChaveArray} = this.state
    const {dificuldade} = this.props.route.params;
    var letras = this.state.letrasJaEscolhidas

    letras.push(letra)
    console.log(letra, letras)
    if(palavraChave.includes(letra)){
      let array = this.state.palavraArray                                 //palavra atual do usuário
      let qtdLetra = this.contaLetraNoArray(palavraChaveArray, letra)     //quantas vezes a letra selecionada aparece na palavra
      let pontoInicial = 0

      while(qtdLetra != 0){
        array[palavraChaveArray.indexOf(letra, pontoInicial)] = letra
        pontoInicial = palavraChaveArray.indexOf(letra, pontoInicial) + 1
        qtdLetra--
      }
      this.setState({
        palavraArray: array,
      })
      if(JSON.stringify(array) === JSON.stringify(palavraChaveArray)){
        Alert.alert(
          'Parabéns!',
          'Você venceu!',
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Dificuldade do jogo')
            }
          ]
        )
      }
    }
    else{
      console.log('A palavra chave NÃO tem a letra ', {letra})
      let erros = this.state.erros + 1
      let maxErros = (dificuldade === 'facil') ? 10 : 6
      if(erros === maxErros){
        letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
        let msg = 'Você esgotou o número máximo de tentativas. A resposta era ' + palavraChave
        console.log(msg)
        Alert.alert(
          'Game Over!',
          msg,
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Dificuldade do jogo')
            }
          ]
        )
      }
      this.setState({
        erros
      })
    }
    this.setState({
      letrasJaEscolhidas: letras
    })
  }
  
  letraUsada(letra){
    return this.state.letrasJaEscolhidas.includes(letra)
  }

  render(){
    const {dificuldade} = this.props.route.params;
    const {dicaPalavraChave, erros} = this.state;      
    return(
      <View style={styles.container}>
        <View style={styles.dicaContainer}>
          <Text style={styles.dicaTexto}>
            {erros === -1 ? this.setaPalavraChave() : null}
            {(dificuldade === 'dificil') ? '' : ('Dica: ' + dicaPalavraChave)}
          </Text>
        </View>
        <View style={styles.forcaContainer}>
          <Image style={styles.imagemForca} source={img[erros]}/>
        </View>
        <View style={styles.palavraContainer}>
        {
          this.state.palavraArray.map(function(letra, indice){
            return(
              <View key={indice} style={[letra !== ' ' ? styles.letraContainer : styles.letraEspacoContainer]}>
                <Text key={indice} style={styles.palavraTexto}>
                  {letra}
                </Text>
              </View>
            );
          }) 
        }
        </View>
        <View style={styles.tecladoContainer}>
          <View style={styles.tecladoLinhaContainer}>
            <BotaoTeclado letra={'Q'} selecionaLetra={() => this.setaLetra('Q')} estado={this.letraUsada('Q')}/>
            <BotaoTeclado letra={'W'} selecionaLetra={() => this.setaLetra('W')} estado={this.letraUsada('W')}/>
            <BotaoTeclado letra={'E'} selecionaLetra={() => this.setaLetra('E')} estado={this.letraUsada('E')}/>
            <BotaoTeclado letra={'R'} selecionaLetra={() => this.setaLetra('R')} estado={this.letraUsada('R')}/>
            <BotaoTeclado letra={'T'} selecionaLetra={() => this.setaLetra('T')} estado={this.letraUsada('T')}/>
            <BotaoTeclado letra={'Y'} selecionaLetra={() => this.setaLetra('Y')} estado={this.letraUsada('Y')}/>
            <BotaoTeclado letra={'U'} selecionaLetra={() => this.setaLetra('U')} estado={this.letraUsada('U')}/>
            <BotaoTeclado letra={'I'} selecionaLetra={() => this.setaLetra('I')} estado={this.letraUsada('I')}/>
            <BotaoTeclado letra={'O'} selecionaLetra={() => this.setaLetra('O')} estado={this.letraUsada('O')}/>
            <BotaoTeclado letra={'P'} selecionaLetra={() => this.setaLetra('P')} estado={this.letraUsada('P')}/>
          </View>
          <View style={styles.tecladoLinhaContainer}>
            <BotaoTeclado letra={'A'} selecionaLetra={() => this.setaLetra('A')} estado={this.letraUsada('A')}/>
            <BotaoTeclado letra={'S'} selecionaLetra={() => this.setaLetra('S')} estado={this.letraUsada('S')}/>
            <BotaoTeclado letra={'D'} selecionaLetra={() => this.setaLetra('D')} estado={this.letraUsada('D')}/>
            <BotaoTeclado letra={'F'} selecionaLetra={() => this.setaLetra('F')} estado={this.letraUsada('F')}/>
            <BotaoTeclado letra={'G'} selecionaLetra={() => this.setaLetra('G')} estado={this.letraUsada('G')}/>
            <BotaoTeclado letra={'H'} selecionaLetra={() => this.setaLetra('H')} estado={this.letraUsada('H')}/>
            <BotaoTeclado letra={'J'} selecionaLetra={() => this.setaLetra('J')} estado={this.letraUsada('J')}/>
            <BotaoTeclado letra={'K'} selecionaLetra={() => this.setaLetra('K')} estado={this.letraUsada('K')}/>
            <BotaoTeclado letra={'L'} selecionaLetra={() => this.setaLetra('L')} estado={this.letraUsada('L')}/>
          </View>
          <View style={styles.tecladoLinhaContainer}>
            <BotaoTeclado letra={'Z'} selecionaLetra={() => this.setaLetra('Z')} estado={this.letraUsada('Z')}/>
            <BotaoTeclado letra={'X'} selecionaLetra={() => this.setaLetra('X')} estado={this.letraUsada('X')}/>
            <BotaoTeclado letra={'C'} selecionaLetra={() => this.setaLetra('C')} estado={this.letraUsada('C')}/>
            <BotaoTeclado letra={'V'} selecionaLetra={() => this.setaLetra('V')} estado={this.letraUsada('V')}/>
            <BotaoTeclado letra={'B'} selecionaLetra={() => this.setaLetra('B')} estado={this.letraUsada('B')}/>
            <BotaoTeclado letra={'N'} selecionaLetra={() => this.setaLetra('N')} estado={this.letraUsada('N')}/>
            <BotaoTeclado letra={'M'} selecionaLetra={() => this.setaLetra('M')} estado={this.letraUsada('M')}/>
          </View>
        </View>       
      </View>
     )
  }     
}
   
  const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
   },
   dicaContainer: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c5c84'
   },
   dicaTexto: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
   },
   forcaContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#1c5c84',
    justifyContent: 'center',
   },
   imagemForca:{
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
   palavraContainer: {
    flexWrap: 'wrap',
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c5c84',
   },
   palavraTexto: {
    fontSize: 30,
    color: 'white'
   },
   letraContainer: {
    height: 40,
    width: 30,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    margin: 5,
    alignItems: 'center',
   },
   letraEspacoContainer: {
    height: 40,
    width: 30,
    margin: 5,
    alignItems: 'center',
   },
   tecladoContainer: {
    height: '30%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: '#1c5c84',
   },
   tecladoLinhaContainer: {
    width: '100%',
    height: 45,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#1c5c84',
    alignContent: 'center',
    justifyContent: 'center',
   }
  })