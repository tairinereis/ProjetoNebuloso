import React from "react";
import {Text, StyleSheet, Image} from 'react-native';

const vcalc = 2 + 2;
const ComponentsScreen = () => {

    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (<Text style={styles.estiloPrincip}>
                <Text style={styles.texto}>Bem-Vindo ao Meu App!</Text>
                <Text style={styles.subtexto}>Esse app é pra dizer que 2+2 pode ser igual a {vcalc} (as vezes não é)!</Text>
                <Text style={styles.subtexto}>Vetor de inteiros:</Text>
                <Text style={styles.subtexto}> {vetor.join(', ')}</Text>
                <Image source={require('../images/imagem.png')} style={{ width: 200, height: 200 }} ></Image>
            </Text>)
}

const styles = StyleSheet.create({
    // Nosso estilo
    texto : {
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%'
    },
    subtexto : {
        fontSize: 20,
        fontWeight: '600',
        width: '100%'
    },
    estiloPrincip : {
        backgroundColor : 'white',
        height: '100%',
        padding : 12,
        color: 'black',
    }
});

export default ComponentsScreen;