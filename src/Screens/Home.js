import React from 'react'
import {View,Container,Text,Col} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const HomeScreen=()=>{
    return(
        <View
        style={{
            maxHeight:height,
            maxWidth:width,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Text>WELCOME TO THE HOME SCREEN</Text>
        </View>
    )



}


export default HomeScreen