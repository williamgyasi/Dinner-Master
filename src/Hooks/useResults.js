import {useEffect,useState} from 'react'
import yelp from '../Api/Yelp'


export default ()=>{
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

    return [searchApi,results]
}