import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee,faFan } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const image = { uri: 'https://i.imgur.com/Dq3x1hl.png' }
    return (
        <>
            <View style={styles.contenedorFooter}>
                <View style={styles.contenedorSection}>
                    <View style={styles.centrarContent}>
                        <Text style={styles.titleSection}>Mytinerary</Text>
                        <Image source={image} style={styles.logo} />
                    </View>
                    <View></View>
                    {/* <View style={styles.centrarContent}>
                        <Text style={styles.titleSection}>Social Networks</Text>
                        <View style={styles.iconContainer}>
                            <Text>Icon</Text>
                            <Text>Icon</Text>
                            <Text>Icon</Text>
                            <FontAwesomeIcon icon={ faCoffee } />
                            <FontAwesomeIcon icon={faFan} />
                        </View>
                    </View> */}
                </View>
                <View style={styles.containerFooter}>
                    <Text style={styles.textFooter}>© 2021 MyTynerary. All rights reserved.</Text>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    contenedorSection: {
        marginTop: 20,
        padding:10,
        height: 150,
        backgroundColor: '#d6d6d6',
        justifyContent: 'center'
    },
    logo: {
        width: 80,
        height: 80
    },
    centrarContent: {
        alignItems: 'center'
    },
    iconContainer: {
        alignItems: 'center'
    },
    titleSection: {
        fontSize: 20
    },
    textFooter: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    containerFooter: {
        backgroundColor: '#747474'
    }

})
export default Footer;