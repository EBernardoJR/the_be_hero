import React  from 'react';
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking  } from 'react-native';
import Logo from '../../assets/logo.png'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'


export default function Detail(){

    const navigation = useNavigation()
    const route = useRoute() //obtendo os parametros passado pra rota

    const caso = route.params.cas

    function navigateBack(){
        navigation.goBack()
    }

    const message = `Olá *${caso.name}*, Estou entrando em contato porque tenho interesse em ajudar no caso *${caso.title}*`

    function sendEMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso ${caso.title}`,//assunto
            recipients: [caso.email],//para quem vai ser enviado
            body: message, //conteudo
        })
    }
    function sendWhatsapp(){
        //usando um deeplinking => mandando msg atraves do app
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={Logo} />
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color='#e02041'/>
            </TouchableOpacity>
            </View>

            <View style={styles.case}>
                    <Text style={[styles.caseProperty, { marginTop: 0 }]}>Ong:</Text>
                    <Text style={styles.caseValue}>{caso.name} de {caso.city} - {caso.uf}</Text>

                    <Text style={styles.caseProperty}>CASO:</Text>
                    <Text style={styles.caseValue}>{caso.title}</Text>

                    <Text style={styles.caseProperty}>VALOR:</Text>
                    <Text style={styles.caseValue}>R$ {caso.value}</Text>
            </View>
                    <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia</Text>
                        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                        <Text style={styles.heroDescription}>Entre em contato</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                                <Text  style={styles.actionText}>WhatsApp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action} onPress={sendEMail}>
                                <Text  style={styles.actionText}>Email</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            
        </View>
    )
}