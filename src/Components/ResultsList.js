import React from 'react'
import {View,Button,Text} from 'native-base'
import {StyleSheet,FlatList,} from 'react-native'

const ResultList=(props)=>{
    const{title,results}=props

    const renderItem=({item})=>{
        return(
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
        )

    }
    return(
        <View>
            <Text 
            style={{
                fontSize:25,
                fontWeight:"bold",
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