import React, { useEffect, useState }  from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList  } from 'react-native';
import Logo from '../../assets/logo.png'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
// import { Container } from './styles';
import api from '../../services/api'


export default function Cases (){
    const navigation = useNavigation()

    const [ cases, setCases ] = useState([])
    const [ total, setTotal ] = useState(0)
    const [ page, setPage ] = useState(0)
    const [ loading, setLoading ] = useState(false)

    async function loadCases(){
        if(loading){
            //evitar  que fique fazendo varias req
            return
        }

        if (total > 0 && cases.length === total){
            return 
        }
        setLoading(true)
        const response = await api.get('/cases', {
            params: {
                page
            }
        })
        setLoading(false)
        setPage(page + 1)
        setCases([...cases, ...response.data])//anexando dois arrays
        setTotal(response.headers['x-total-count'])//total de casos enviado pelo headers
    }

    useEffect(()=>{
        loadCases()
    }, [])

    function navigateToDetail(cas){
        navigation.navigate('Detail', {
            cas //enviando todos os dados do caso para outra pagna
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={Logo} />
            <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} Casos</Text></Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salva o dia de alguem!</Text>

            <FlatList 
                style={styles.casesList}
                data={cases} //vai repetir os itens 3 vezes
                onEndReached={loadCases}//disparada qnd o usuario cehgar no final da lista
                onEndReachedThreshold={0.2} //quando tiver em 20% da tela vai carregar novos itens
                keyExtractor={ cas => String(cas.id)}
               // showsVerticalScrollIndicator={false}
                renderItem={({ item: cas }) => ( //o intem é cada caso
                    <View style={styles.case}>
                    <Text style={styles.caseProperty}>Ong:</Text>
                    <Text style={styles.caseValue}>{cas.name}</Text>

                    <Text style={styles.caseProperty}>CASO:</Text>
                    <Text style={styles.caseValue}>{cas.title}</Text>

                    <Text style={styles.caseProperty}>VALOR:</Text>
                    <Text style={styles.caseValue}>R$ {cas.value}</Text>
                    <TouchableOpacity style={styles.button} 
                    onPress={() => navigateToDetail(cas)}
                    >
                        <Text style={styles.buttonText}>Ver mais detalhes</Text>
                        <Feather name='arrow-right' size={16} color='#e02041' />
                    </TouchableOpacity>
                </View>
                )}
            />

        </View>
    )
}