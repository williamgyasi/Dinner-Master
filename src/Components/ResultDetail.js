import React from 'react'
import {View,Text} from 'native-base'
import {Image,StyleSheet} from 'react-native'

const ResultDetail=(props)=>{
    const{details}=props
    return(
        <View style={styles.detailsplaceholder} >
            <Image 
            source={{uri:details.image_url}}
            style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{details.name}</Text>

        </View>
    )
}

const styles=StyleSheet.create({
    detailsplaceholder:{
        padding:10,
    },
    restaurantImage:{
        width:250,
        borderRadius:5,
        height:200
    },
    restaurantName:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        textTransform:"uppercase"

    }

})

export default ResultDetail;
