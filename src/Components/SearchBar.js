import React from 'react'
import {StyleSheet,View} from 'react-native'
import {Dimensions,TextInput} from 'react-native'
import {Icon,Text} from "native-base"
const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const SearchBar=({searchkey,onSearchChange,onSearchSubmit})=>{
    return(
        <View style={styles.background}>
            <Icon type="FontAwesome" name="search" active={false} style={{color:'black',fontSize:30,marginLeft:10}} />
            <TextInput 
            value={searchkey} 
            autoCapitalize={false}
            autoCorrect={false}
            onChangeText={onSearchChange} 
            style={styles.searchText} 
            returnKeyType="search"
            onEndEditing={onSearchSubmit}
            placeholder={"Search"} />
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        backgroundColor:"#e3e4e6",
        maxWidth:width,
        maxHeight:height,
        width:width,
        margin:10,
        alignItems:"center",
        height:60,
        flexDirection:"row",
        borderRadius:5,
        padding:5,
    },
    searchText:{
        fontSize:20,
        color:"black",
        marginLeft:5,
        flex:1, 

    }

})
export default SearchBar;