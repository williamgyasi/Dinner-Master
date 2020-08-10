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
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Icon name="star" type="Foundation" style={{fontSize:20,color:"orange"}} />
                <Text style={{fontSize:20,color:"black",marginLeft:5}}>{details.rating}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Icon name="chart-bar" type="FontAwesome5" style={{fontSize:20,color:"orange"}} />
                <Text style={{fontSize:20,color:"black",marginLeft:5}}>{details.review_count} Reviews</Text>
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
