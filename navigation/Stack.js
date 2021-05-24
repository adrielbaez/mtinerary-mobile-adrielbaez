import React from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Itineraries from '../screens/Itineraries'
import UserLogged from '../components/UserLogged';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Stack = (props) => {
  const stack = createStackNavigator()
  const {DefaultTheme}=props
  console.log(DefaultTheme);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0BC6C3',
      accent: '#0655BF'
    }
  }
  let headerUserModify = () => <UserLogged userPicture={!props.userLogged ? 'https://i.imgur.com/Wkk311i.png' : props.userLogged.userPicture} />
  return (
    <stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTintColor: theme.colors.surface,
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerTitleAlign: 'center'
    }}>
      <stack.Screen name="welcome" component={Welcome} options={{
        title: 'Welcome',
        headerRight: headerUserModify,
        headerShown: false
      }} />
      <stack.Screen name="home" component={Home} options={{
        title: 'Home',
        headerRight: headerUserModify
      }} />
      <stack.Screen name="cities" component={Cities} options={{
        title: 'Cities',
        headerRight: headerUserModify
      }} />
      <stack.Screen name="itineraries" component={Itineraries} options={{
        title: 'Itineraries',
        headerRight: headerUserModify
      }} />
      <stack.Screen name="signIn" component={SignIn} options={{
        title: 'Sign In',
        headerRight: headerUserModify,
        headerShown: false
      }} />
      <stack.Screen name="signUp" component={SignUp} options={{
        title: 'Sign Up',
        headerRight: headerUserModify,
        headerShown: false
      }} />
    </stack.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    userLogged: state.authReducer.userLogged
  }
}

//   const mapDispatchToProps = {
//     iniciarSesionLS: authActions.iniciarSesionLS,
//   }

export default connect(mapStateToProps, null)(Stack)


// import Home from '../screens/Home';
// import Welcome from '../screens/Welcome';
// import Cities from '../screens/Cities';
// import Itineraries from '../screens/Itineraries';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';


// export const WelcomeStack = () => {
//     return (
//         <stack.Navigator screenOptions={{
//             headerStyle: {
//               backgroundColor: 'blue'
//             },
//             // headerTintColor: theme.colors.surface, 
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//             headerTitleAlign:'center'
//           }}>
//             <stack.Screen name="welcome" component={Welcome} />
//             <stack.Screen name="home" component={Home} />
//         </stack.Navigator>
//     )
// }
// export const HomeStack = () => {
//     return (
//         <stack.Navigator screenOptions={headerModify}>
//             <stack.Screen name="home" component={Home} 
//             options={optionsModify}
//             />
//         </stack.Navigator>
//     )
// }
// export const SignInStack = () => {
//     return (
//         <stack.Navigator screenOptions={headerModify}>
//             <stack.Screen name="signIn" component={SignIn} />
//         </stack.Navigator>
//     )
// }
// export const SignUpStack = () => {
//     return (
//         <stack.Navigator screenOptions={headerModify}>
//             <stack.Screen name="signUp" component={SignUp} />
//         </stack.Navigator>
//     )
// }

// export const CitiesStack = () => {
//     return (
//         <stack.Navigator screenOptions={headerModify}>
//             <stack.Screen name="cities" component={Cities} />            
//             <stack.Screen name="itineraries" component={Itineraries} />            
//         </stack.Navigator>
//     )
// }
