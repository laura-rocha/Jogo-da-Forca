import react from "react";
import {Text, StyleSheet, TouchableHighlight, View} from 'react-native';

const BotaoTeclado = ({letra, selecionaLetra, estado}) => (
    <View>
        <TouchableHighlight
        style={styles.botao}
        underlayColor={'#1c5c84'}
        onPress={estado ? null : selecionaLetra}>
            <Text style={estado ? styles.textoBotaoUsado: styles.textoBotao}>
                {letra} 
            </Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    botao: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c5c84',
    },
    textoBotao: {
        color: 'white',
        fontWeight: '600',
        fontSize: 25,
    },
    textoBotaoUsado: {
        color: '#1c5c84',
        fontWeight: '600',
        fontSize: 25,
    }
  });

  export default BotaoTeclado