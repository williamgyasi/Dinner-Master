import React,{useEffect,useState} from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../Api/Yelp'
import useResults from '../Hooks/useResults'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height

const HomeScreen=({navigation})=>{
    const [searchTerm,setSearchTerm] = useState("")
    const [searchApi,results]=useResults()
    return(
        <View>
            <SearchBar 
            searchkey={searchTerm} 
            onSearchChange={term=>setSearchTerm(term)}
            onSearchSubmit={()=>searchApi(searchTerm)}
            />
            <Text>WE HAVE FOUND {results.length}</Text>
        </View>
    )



}


export default HomeScreen;