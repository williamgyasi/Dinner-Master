import React from 'react'
import {StyleSheet,View} from 'react-native'
import {Dimensions,TextInput} from 'react-native'
import {Icon} from "native-base"
const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


const SearchBar=()=>{
    return(
        <View style={styles.background}>
            <Icon type="FontAwesome" name="search" active={false} style={{color:'black',fontSize:20,marginLeft:10}} />
            <TextInput
        </View>
    )

}


const styles=StyleSheet.create({
    background:{
        backgroundColor:"gray",
        maxWidth:width,
        maxHeight:height,
        width:width,
        height:45,
        margin:10,
        padding:10,
        borderRadius:5,
    },
    searchbar:{


    }

})
export default SearchBar;