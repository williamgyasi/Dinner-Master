import React from 'react'
import {View,Button,Text} from 'native-base'
import {StyleSheet,FlatList,} from 'react-native'
import ResultDetail from '../Components/ResultDetail'

const ResultList=(props)=>{
    const{title,results}=props

    const renderItem=({item})=>{
        return <ResultDetail details={item} />
    }
    return(
        <View style={{marginBottom:15}}>
            <Text 
            style={{
                fontSize:25,
                fontWeight:"bold",
                marginLeft:15,
                marginBottom:10,
            }}>{title}</Text>
            <FlatList
            data={results}
            horizontal={true}
            keyExtractor={(result)=>result.id}
            renderItem={renderItem}
            />            
        </View>
    )

}
export default ResultList;