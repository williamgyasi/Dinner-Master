import React from 'react'
import {View,Container,Text} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "../Screens/Home"
import SearchScreen from "../Screens/Search"
import ResultDetailScreen from '../Screens/ResultDetailScreen'

const RootStack=createStackNavigator();


const RootRouter=()=>{
    return(
        <NavigationContainer>
        <RootStack.Navigator 
        screenOptions={{headerShown:true}}
        initialRouteName="Search"
        >
            <RootStack.Screen options={{title:"Home"}} name="Home" component={HomeScreen} />
            <RootStack.Screen options={{headerShown:false}}  name="Search" component={SearchScreen} />
            <RootStack.Screen options={{headerShown:false}} name="ResultDetailScreen" component={ResultDetailScreen}/>
        </RootStack.Navigator>
    </NavigationContainer>
    )


}

export default RootRouter