import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import { Text } from 'react-native'
import {WelcomeStack, CitiesStack, HomeStack, SignInStack, SignUpStack} from './Stack'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions';
import UserLogged from '../components/UserLogged'

const drawer = createDrawerNavigator()

const Drawer = (props) => {
    console.log(props.userLogged);
    return (
        <>
        <drawer.Navigator>
            <drawer.Screen name="welcome" component={WelcomeStack} options={{
                title: 'Welcome',
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
        </>
    )
}

const mapStateToProps = state => {
    return {
      userLogged: state.authReducer.userLogged
    }
  }
  
//   const mapDispatchToProps = {
//     iniciarSesionLS: authActions.iniciarSesionLS,
//   }
  
  export default connect(mapStateToProps, null)(Drawer)