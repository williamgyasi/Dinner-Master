import React,{useEffect,useState} from 'react'
import {View,FlatList,Image} from 'react-native'
import {Container,Text} from 'native-base'
import yelp from '../Api/Yelp'
const ResultDetailScreen=({route,navigation})=>{
    const [restaurant,setRestaurant]=useState(null)
    const{id}=route.params
    console.log(restaurant)

    useEffect(()=>{
        getResult(id)
    },[])

    const getResult=(id)=>{
        yelp.get(`/${id}`)
        .then(result=>setRestaurant(result.data))
        .catch(e=>alert(e))
    }


    const _renderItem=({item})=>{
        return(
            <Image style={{width:100,height:100}} source={{uri:item}} />
        )
    }




    if(!restaurant){
        return null
    }
    return(
        <View>
            <Text>{restaurant.name}</Text>
            <FlatList 
            data={restaurant.photos}
            extraData={restaurant}
            keyExtractor={(item,index)=>item}
            renderItem={_renderItem}

            />
        </View>

    )
}


export default ResultDetailScreen

