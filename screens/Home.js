import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
const Home = (props) => {
    const image = { uri: 'https://i.imgur.com/R9YLTAs.jpg' }

    let cities = [
        {
            src: 'https://i.imgur.com/ANeRHjn.jpg',
            header: 'Ushuaia',
            id: 1
        },
        {
            src: 'https://i.imgur.com/9YcioRD.jpg',
            header: 'London',
            id: 3
        },
        {
            src: 'https://i.imgur.com/4ZmTscD.jpg',
            header: 'New York',
            id: 5
        },
        {
            src: 'https://i.imgur.com/7CqFq5Z.jpg',
            header: 'Sydney',
            id: 6
        },
        {
            src: 'https://i.imgur.com/7CApOUG.jpg',
            header: 'Shanghai',
            id: 8
        },
        {
            src: 'https://i.imgur.com/sBrjv2i.jpg',
            header: 'Seattle',
            id: 7
        }
    ]
    return (
        <>
            <ScrollView>
                <ImageBackground source={image} style={styles.containertHero}>
                    <View style={styles.welcome}>
                        <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>MyTinerary</Text>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Take a small break for coffee and enjoy</Text>
                    </View>
                    <ScrollView  >
                    <View style={{ width: 400, height: 300, flexDirection: 'row' }}>
                        <ImageBackground source={{ uri: cities[0].src }} style={{ margin:5,flex: 1 }}>
                        <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[0].header}</Text>
                        </ImageBackground>
                        <View style={{ flex: 1 }}>
                            <ImageBackground source={{ uri: cities[1].src }} style={{margin:5, flex: 1 }}>
                            <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[1].header}</Text>
                            </ImageBackground>
                            <ImageBackground source={{ uri: cities[2].src }} style={{ margin:5,flex: 1 }}><Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[2].header}</Text></ImageBackground>
                        </View>
                    </View>
                    <View style={{ width: 400, height: 300, flexDirection: 'row'}}>
                        <View style={{ flex: 1 }}>
                            <ImageBackground source={{ uri: cities[3].src }} style={{margin:5, flex: 1 }}>
                            <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[3].header}</Text>
                            </ImageBackground>
                            <ImageBackground source={{ uri: cities[4].src }} style={{margin:5,flex: 1 }}><Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[4].header}</Text></ImageBackground>
                        </View>
                        <ImageBackground source={{ uri: cities[5].src }} style={{margin:5, flex: 1 }}>
                        <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{cities[5].header}</Text>
                        </ImageBackground>
                    </View>
                        {/* {cities.map((city, index) => {
                            return (
                                <ImageBackground key={index} source={{ uri: city.src }} style={styles.cityImage}>
                                    <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>{city.header}</Text>
                                </ImageBackground>
                            )
                        })} */}
                    </ScrollView>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Want to know more about cities?</Text>
                    </View>
                    <View style={styles.boton}>
                        <Text onPress={()=> props.navigation.navigate('cities')}>Go to Cities</Text>
                    </View>
                   
                </ImageBackground>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    welcome: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10

    },
    containertHero: {
        alignItems: 'center',
    },
    cityImage: {
        width: 300,
        height: 450,
        marginTop: 50,
        marginLeft: 30,
        alignItems: 'center',
    },
    cta: {
        width: 400,
        height: 400
    },
    boton: {
        height: 50,
        width: 150,
        backgroundColor: '#90ee90',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 30,
    }
})
export default Home;