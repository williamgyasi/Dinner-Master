import React from 'react'
import {View,Container,Text,Col,Button} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const HomeScreen=()=>{
    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text>WELCOME TO THE MAIN HOME SCREEN</Text>
        </View>
    )



}


export default HomeScreen;