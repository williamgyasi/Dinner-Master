import React from 'react'
import {View,Container,Text} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from "../Screens/Login"
import RegisterScreen from "../Screens/Register"

const RootStack=createStackNavigator();


const RootRouter=()=>{
    return(
        <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen  name="Login" component={LoginScreen} />
            <RootStack.Screen  name="Register" component={RegisterScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
    )


}

export default RootRouter