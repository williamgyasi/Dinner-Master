import React,{useEffect,useState} from 'react'
import {View,Container,Text,Button} from 'native-base'
import {Dimensions} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../Hooks/useResults'
import ResultsList from '../Components/ResultsList'

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height

const SearchScreen=({navigation})=>{
    const [searchTerm,setSearchTerm] = useState("")
    const [searchApi,results]=useResults()
    
    const filterResultByPrice=price=>{
        return results.filter(result=>{
            return result.price === price
        })
    }
    console.log(results)
    return(
        <View>
            <SearchBar 
            searchkey={searchTerm} 
            onSearchChange={term=>setSearchTerm(term)}
            onSearchSubmit={()=>searchApi(searchTerm)}
            />
            <Text>WE HAVE FOUND {results.length}</Text>
            <ResultsList results={filterResultByPrice("$")}  title="Cost Effective"/>
            <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier"/>
            <ResultsList results={filterResultByPrice("$$$")} title="Big Spender"/>

        </View>
    )



}


export default SearchScreen;