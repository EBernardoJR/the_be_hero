import React  from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import Logo from '../../assets/logo.png'
import styles from './styles'
// import { Container } from './styles';

export default function Cases (){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={Logo} />
            <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>0 Casos</Text></Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salva o dia de alguem!</Text>

            <View style={styles.casesList}>
                <View style={styles.case}>
                    <Text style={styles.caseProperty}>Ong:</Text>
                    <Text style={styles.caseValue}>AACD</Text>

                    <Text style={styles.caseProperty}>CASO:</Text>
                    <Text style={styles.caseValue}>teste</Text>

                    <Text style={styles.caseProperty}>VALOR:</Text>
                    <Text style={styles.caseValue}>R$ 1233.67</Text>
                    <TouchableOpacity style={styles.button}><Text>Ver mais detalhes</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}