import { createStackNavigator } from '@react-navigation/stack'
import DificuldadeJogo from './DificuldadeJogo'
import JogoDaForca from './JogoDaForca'
   
const JogoStack = createStackNavigator()
   
const TelaJogoDaForca = ({addPartida, nomeJogador, deslogar}) => (
    <JogoStack.Navigator >
        <JogoStack.Screen
            name="Dificuldade do jogo"
            options={{
                title: 'Modo de Jogo',
                headerStyle: {
                  backgroundColor: '#1c5c84',
                },
                headerTintColor: '#f4f0d9',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        >
            {
            props => <DificuldadeJogo {...props} nomeJogador={nomeJogador} sair={deslogar}/>
            }
        </JogoStack.Screen>
        <JogoStack.Screen
            name="Jogo Da Forca"
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#1c5c84',
                },
                headerTintColor: '#f4f0d9',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        >
            {
            props => <JogoDaForca {...props} resultadoPartida={addPartida}/>
            }
        </JogoStack.Screen>
    </JogoStack.Navigator>
)
   
 export default TelaJogoDaForca