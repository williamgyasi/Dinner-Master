import React from 'react'
import {View,Container,Text} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from "../Screens/Home"

const RootStack=createStackNavigator();


const ROOTROUTER=({})=>{
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
    </NavigationContainer>


}

export default ROOTROUTER