import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Alert } from 'react-native';
import { Button, FAB, Portal } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
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
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
    const logOut = () => {
        props.cerrarSesion('home')
        props.navigation.navigate('home')
    }
    const alertLogOut = () => {
        Alert.alert(
            "Log Out",
            `Are you sure you want to go out??`,
            [
                { text: 'YES', onPress: logOut },
                { text: 'NO' }
            ]
        )
    }
    const { open } = state;
    // let fabMenu = 
    return (
        <>
            <ScrollView>

                <View style={{ flex: 1 }}>
                    <ImageBackground source={{ uri: 'https://i.imgur.com/J3NSnvz.jpg' }} style={{ width: '100%', height: 400, justifyContent:'center'}}>
                        <View>
                            <View style={{ width:200,padding: 10, backgroundColor:'white', justifyContent:'center', margin: 5  }}>
                                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Welcome</Text>
                            </View>
                            {props.userLogged ?
                                (<View style={{ width:200,padding: 10, backgroundColor:'white', justifyContent:'center', margin: 5  }}>
                                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{props.userLogged.firstName}</Text>
                            </View>)
                            : null}
                            <View style={{ width:250,padding: 10, backgroundColor:'white', justifyContent:'center', margin: 5  }}>
                                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>To Mytinerary</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.containertHero}>
                    <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center',  marginTop:45}}>These are some of the wonders that await you</Text>
                    <View style={{ width: '100%', height: 500 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <ImageBackground source={{ uri: 'https://i.imgur.com/rZe2XZG.jpg' }} style={{ flex: 2, margin: 5 }}>
                                <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Triumphal Arch</Text>
                            </ImageBackground>
                            <ImageBackground source={{ uri: 'https://i.imgur.com/hSHbYbv.jpg' }} style={{ flex: 1, margin: 5 }}>
                                <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Liberty Statue</Text>
                            </ImageBackground>
                        </View>
                        <ImageBackground source={{ uri: 'https://i.imgur.com/ozupj7K.jpg' }} style={{ flex: 1, margin: 5 }}>
                            <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Grand Central Station</Text>
                        </ImageBackground>
                    </View>
                    <ScrollView  >
                        <View style={{ width: 400, height: 500, flexDirection: 'row' }}>
                            <ImageBackground source={{ uri: 'https://i.imgur.com/btQjTyO.jpg' }} style={{ margin: 5, flex: 1 }}>
                                <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Barcelona Cathedral</Text>
                            </ImageBackground>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={{ uri: 'https://i.imgur.com/JwiGaDC.jpg' }} style={{ margin: 5, flex: 2 }}>
                                    <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Wall Street</Text>
                                </ImageBackground>
                                <ImageBackground source={{ uri: 'https://i.imgur.com/Q3zJFBf.jpg' }} style={{ margin: 5, flex: 3 }}><Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Obelisk</Text></ImageBackground>
                            </View>
                        </View>
                        <View style={{ width: 400, height: 500, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={{ uri: 'https://i.imgur.com/jEVTrHz.jpg' }} style={{ margin: 5, flex: 3 }}>
                                    <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Iguazu Falls</Text>
                                </ImageBackground>
                                <ImageBackground source={{ uri: 'https://i.imgur.com/uOEEBiK.jpg' }} style={{ margin: 5, flex: 2 }}><Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Beacon of the End of The World</Text></ImageBackground>
                            </View>
                            <ImageBackground source={{ uri: 'https://i.imgur.com/cmziMvF.jpg' }} style={{ margin: 5, flex: 1 }}>
                                <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', textAlign: 'center' }}>Grand Canyon</Text>
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
                        <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Want to know more about cities?</Text>
                    </View>
                    <Button style={globalStyles.botonesMedium} mode="contained" dark={true} color="#E7B61B" onPress={() => props.navigation.navigate('cities')}>Go to Cities</Button>


                </View>
                <Portal>
                    <FAB.Group
                        open={open}
                        icon={open ? 'close-thick' : 'menu'}
                        actions={[
                            {
                                icon: 'home',
                                label: 'Home',
                                small: false,
                                onPress: () => props.navigation.navigate('home'),
                            },
                            {
                                icon: 'city',
                                label: 'Cities',
                                onPress: () => props.navigation.navigate('cities'),
                                small: false,
                            },

                            props.userLogged ? ({ icon: 'logout', label: 'Log Out', onPress: alertLogOut }) : ({ icon: 'tooltip-account', label: 'Sign', onPress: () => props.navigation.navigate('signIn'), })
                            
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    welcome: {
        width: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10

    },
    containertHero: {
        alignItems: 'center',
        // backgroundColor: '#E7B61B'
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
        width: 200,
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 30,
    }
})
const mapStateToProps = (state) => {
    return {
        userLogged: state.authReducer.userLogged
    }
}
const mapDispatchToProps = {
    cerrarSesion: authActions.cerrarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)