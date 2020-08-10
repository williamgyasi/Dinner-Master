import React from 'react'
import {View,Text,Icon} from 'native-base'
import {Image,StyleSheet} from 'react-native'

const ResultDetail=(props)=>{
    const{details}=props
    return(
        <View style={styles.detailsplaceholder} >
            <Image 
            source={{uri:details.image_url}}
            style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{details.name}</Text>
            <View>
                <Text>{details.rating}</Text>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    detailsplaceholder:{
        marginLeft:15,
    },
    restaurantImage:{
        width:250,
        borderRadius:5,
        height:200
    },
    restaurantName:{
        fontWeight:"bold",
        fontSize:15,
        marginTop:10,
        textTransform:"uppercase",
        textAlign:"left"

    }
})

export default ResultDetail;
