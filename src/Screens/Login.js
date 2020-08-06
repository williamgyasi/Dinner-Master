import React from 'react'
import {View,Container,Text,Col} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const LoginScreen=()=>{
    return(
        <View
        style={{
          
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text>WELCOME TO THE LOGIN SCREEN</Text>
        </View>
    )



}


export default LoginScreen;