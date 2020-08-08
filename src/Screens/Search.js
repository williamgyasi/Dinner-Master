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

    useEffect(()=>{
        searchApi("pasta")
    },[])

    const searchApi=(keySearchTerm)=>{
        console.log("RENDERED ONCE")
        yelp.get('/search',{
            params:{
                limit:50,
                term:keySearchTerm,
                location:"san jose"

            }
        })
        .then(result=>setResults(result.data.businesses))
        .catch(error=>alert("Something Went Wrong"))
    }
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