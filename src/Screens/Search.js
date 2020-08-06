import React from 'react'
import {View,Container,Text,Col} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const HomeScreen=()=>{
    return(
        <View
        style={{
            backgroundColor:"red",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text>WELCOME TO THE SEARCH SCREEN</Text>
        </View>
    )



}


export default HomeScreen;