import React from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'
import SearchBar from '../Components/SearchBar'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height



const HomeScreen=({navigation})=>{
    const testSearch = ()=>{
        navigation.navigate("Home")
    }
    
    return(
        <View
        style={{
           
        }}
        >
            <SearchBar />
            <Text>WELCOME TO THE SEARCH SCREEN</Text>
            <Button
            onPress={testSearch}>
                <Text>WELCOME TO THE FREAK SHOW</Text>
                </Button>

        </View>
    )



}


export default HomeScreen;