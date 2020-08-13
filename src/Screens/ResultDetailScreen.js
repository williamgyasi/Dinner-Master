import React from 'react'
import {View} from 'react-native'
import {Container,Text} from 'native-base'
const ResultDetailScreen=({route,navigation})=>{
    const {id}=route.params
    return(
        <View>
            <Text>{id}</Text>
        </View>

    )
}


export default ResultDetailScreen

