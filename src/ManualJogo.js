import {View, Text, ScrollView, StyleSheet} from 'react-native'
  
 const ManualJogo = () => (
    <View style={styles.container}>
        <View style={styles.manualContainer}>
            <View>
                <Text style={styles.titulo}>
                    Como jogar
                </Text>
            </View>

            <ScrollView>
                <Text style={styles.textoManual}>
                {'\n'}
                1. O jogador deve selecionar a dificuldade do jogo (fácil, médio ou difícil){'\n\n'}
                2. O sistema mostrará a estrutura de uma forca{'\n\n'}
                3. Uma palavra será selecionada, mas serão apresentados na tela apenas
                traços para cada letra da palavra{'\n\n'}
                4. Será apresentada, também, uma dica da palavra selecionada 
                (apenas nos modos fácil e médio){'\n\n'}
                5. O jogador deve escolher uma letra do alfabeto por vez{'\n\n'}
                6. Se acertar, será escrita a letra nos respectivos traços{'\n\n'}
                7. Se errar, uma parte do boneco será desenhada (obs. a quantidade 
                de elementos do boneto varia de acordo com a 
                dificuldade do jogo escolhida){'\n\n'}
                8. O jogador perde se não conseguir identificar a palavra antes do desenho estar completo{'\n\n'}
                </Text>
            </ScrollView>
        </View>
    </View>
 )
 
const fundo = '#F3F3EC'
const borda = '#3c6d84'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c5c84',
  },
  manualContainer: {
    flex: 1,
    marginHorizontal: '2%',
    marginTop: '15%',
    marginBottom: '10%',
    alignItems: 'center',
    borderColor: borda,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: fundo,
  },
  titulo: {
    fontStyle: 'italic',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
  },
  textoManual: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  }
});
  
 export default ManualJogo