import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class DificuldadedoJogo extends Component{

    navigate = (dificuldade) => {
        this.props.navigation.navigate('Jogo Da Forca', {dificuldade})
    }

    render() {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.props.sair}>
                <View style={styles.sairContainer}>
                    <Text style={styles.sairTexto}>
                        Sair
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.TextoPrincipal}>
                Olá, {this.props.nomeJogador}!
            </Text>
            <Text style={styles.TextoSecundario}>
                Escolha o modo de jogo para iniciar a partida
            </Text>  
            <TouchableWithoutFeedback onPress={() => this.navigate('facil')}>
                <View style={styles.dificuldadeContainer}>
                    <Text style={styles.dificuldade}>
                        Fácil
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.navigate('medio')}>
                <View style={styles.dificuldadeContainer}>
                    <Text style={styles.dificuldade}>
                        Médio
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.navigate('dificil')}>
                <View style={styles.dificuldadeContainer}>
                    <Text style={styles.dificuldade}>
                        Difícil
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#195c85'
    },
    dificuldadeContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#f4f0d9',
        backgroundColor: '#d3843d',
        marginHorizontal: '10%',
        margin: '5%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dificuldade: {
        fontSize: 25,
        color: '#f4f0d9',
        fontWeight: 'bold',
    },
    TextoPrincipal: {
        color: '#f4f0d9',
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
    },
    TextoSecundario: {
        color: '#f4f0d9',
        fontSize: 25,
        marginTop: '3%',
        marginBottom: '10%',
        marginLeft: '7%',
    },
    sairContainer: {
        height: 35,
        width: 55,
        marginTop: '3%',
        marginBottom: '10%',
        marginRight: '5%',
        borderWidth: 2,
        borderColor: '#f4f0d9',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    sairTexto: {
        fontSize: 15,
        color: '#f4f0d9',
        fontWeight: 'bold',
    },
})