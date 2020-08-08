import React,{useEffect,useState} from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'
import SearchBar from '../Components/SearchBar'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height

const HomeScreen=({navigation})=>{
    const [searchTerm,setSearchTerm] = useState("")
    return(
        <View>
            <SearchBar 
            searchkey={searchTerm} 
            onSearchChange={term=>setSearchTerm(term)}
            onSearchSubmit={()=>console.log("SUBMITTEDDD AGAIN")}
            />
            <Text>{searchTerm}</Text>
        </View>
    )



}


export default HomeScreen;