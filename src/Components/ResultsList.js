import React from 'react'
import {View,Button,Text} from 'native-base'
import {StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultDetail from '../Components/ResultDetail'
import {withNavigation} from '@react-navigation/compat'

const ResultList=(props)=>{
    const{title,results,navigation}=props
    const renderItem=({item})=>{
        return (
        <TouchableOpacity onPress={()=>navigation.navigate("ResultDetailScreen",{id:item.id})}>
            <ResultDetail details={item}  />
        </TouchableOpacity>
        )
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
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result)=>result.id}
            renderItem={renderItem}
            />            
        </View>
    )

}
export default withNavigation(ResultList);