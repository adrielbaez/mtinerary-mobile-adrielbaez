import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import { Text } from 'react-native'
import {WelcomeStack, CitiesStack, HomeStack, SignInStack, SignUpStack} from './Stack'

const drawer = createDrawerNavigator()

const Drawer = (props) => {
    return (
        <drawer.Navigator>
            <drawer.Screen name="welcome" component={WelcomeStack} options={{
                title: 'Welcome'
            }} />
            <drawer.Screen name="home" component={HomeStack} options={{
                title: 'Home'
            }} />
            <drawer.Screen name="cities" component={CitiesStack} options={{
                title: 'Cities',
            }}/>
            <drawer.Screen name="signIn" component={SignInStack} options={{
                title: 'Sign In',
            }}/>
            <drawer.Screen name="signUp" component={SignUpStack} options={{
                title: 'Sign Up',
            }}/>
        </drawer.Navigator>
    )
}

export default Drawer