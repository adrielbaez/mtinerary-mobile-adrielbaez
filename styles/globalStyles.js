import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '2.5%'
    },
    titulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    },
    botonesMedium:{
        width: 200,
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 30,
    },
    centrarContent:{
        justifyContent:'center',
        alignItems: 'center'
    },
    centrarHorizontal:{
        justifyContent:'center',
        alignItems: 'center'
    },
    centrarVertical:{
        justifyContent:'center',
    },
    allScreem:{
        width:'100%',
    },
    messageError:{
        color: 'red',
        fontSize:15
    }
});

export default globalStyles;