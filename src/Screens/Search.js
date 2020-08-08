import React,{useEffect,useState} from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../Api/Yelp'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height

const HomeScreen=({navigation})=>{
    const [searchTerm,setSearchTerm] = useState("")
    const [results,setResults]=useState([])

    const searchApi=()=>{
        yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                radius:500

            }
        })
        .then(result=>setResults(result.data.businesses))
        .catch(error=>alert(error))
    }
    return(
        <View>
            <SearchBar 
            searchkey={searchTerm} 
            onSearchChange={term=>setSearchTerm(term)}
            onSearchSubmit={searchApi}
            />
            <Text>WE HAVE FOUND {results.length}</Text>
        </View>
    )



}


export default HomeScreen;