import React from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height



const HomeScreen=({navigation})=>{

    const testSearch = ()=>{
        navigation.navigate("Home")
    }
    
    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignSelf:"center"
        }}
        >
            <Text>WELCOME TO THE SEARCH SCREEN</Text>
            <Button
            onPress={testSearch}>
                <Text>WELCOME TO THE FREAK SHOW</Text>
                </Button>

        </View>
    )



}


export default HomeScreen;