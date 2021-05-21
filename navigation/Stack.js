import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Cities from '../screens/Cities';
import Itineraries from '../screens/Itineraries';
const stack = createStackNavigator()

export const WelcomeStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="welcome" component={Welcome} />
            <stack.Screen name="home" component={Home} />
        </stack.Navigator>
    )
}
export const HomeStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="home" component={Home} />
        </stack.Navigator>
    )
}

export const CitiesStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="cities" component={Cities} />            
            <stack.Screen name="itineraries" component={Itineraries} />            
        </stack.Navigator>
    )
}
 