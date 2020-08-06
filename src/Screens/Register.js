import React from 'react'
import {View,Container,Text,Col} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const RegisterScreen=()=>{
    return(
        <View
        style={{
            backgroundColor:"red",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text>WELCOME TO THE REGISTER SCREEN SCREEN</Text>
        </View>
    )



}


export default RegisterScreen;