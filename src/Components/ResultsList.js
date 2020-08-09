import React from 'react'
import {View,Button,Text} from 'native-base'
import {StyleSheet} from 'react-native'

const ResultList=(props)=>{
    const{title,results}=props
    return(
        <View>
            <Text 
            style={{
                fontSize:25,
                fontWeight:"bold",
            }}>{title}</Text>

            <Text>COMPONENT HAS {results.length} </Text>
            
        </View>
    )

}
export default ResultList;