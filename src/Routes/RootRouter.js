import React from 'react'
import {View,Container,Text} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "../Screens/Home"
import SearchScreen from "../Screens/Search"

const RootStack=createStackNavigator();


const RootRouter=()=>{
    return(
        <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen  name="Home" component={HomeScreen} />
            <RootStack.Screen  name="Search" component={SearchScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
    )


}

export default RootRouter