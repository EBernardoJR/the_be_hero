import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, //so nas laterais
        paddingTop: Constants.statusBarHeight + 20, //distancia do topo
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold:{
        fontWeight: 'bold'
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description:{
      fontSize: 16,
      lineHeight: 24,
      color: '#737380'
    },
    casesList:{
        marginTop: 32
    },
    case:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    caseProperty:{
        fontSize: 15,
        color: '#41414d',
        fontWeight: 'bold'
    },
    caseValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 14,
        color: '#737380'
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})