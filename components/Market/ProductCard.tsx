import React from "react";
import { View, StyleSheet , Text} from "react-native";
import Colors from "../../constants/Colors";

import { Post } from "../../constants/ServerConstants";

export default function ProductCard({post}:{post:Post}){
    
    
    
    return (<>

    <View style={styles.productCard}>
      <View style={styles.productImage}></View>
      <View ><Text style={styles.productTitle}>{post.productType}</Text></View>
      <View ><Text style={styles.productDescription}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text></View>
      <View ><Text style={styles.productLocation}>{post.location}</Text></View>
      <View ><Text style={styles.productUnits}>{post.units}</Text></View>
      <View ><Text style={styles.productPricePerUnit}>{post.pricePerUnit}</Text></View>
      <View ><Text style ={styles.productSeller}>{post.seller}</Text></View>
    </View>
    
    

    
    </>)
}


const styles = StyleSheet.create({
    productCard:{
        width:300,
        margin:10,
        padding:20,
        backgroundColor:"#252525",
        shadowColor:"rgba(0, 0, 0, 0.1)",
        shadowRadius:4,
        shadowOffset:{width:0, height:4}
    },
    productImage:{
        width:"100%",
        height:200,
        backgroundColor:"#333333",
        borderRadius:4,
        marginBottom:10
    },
    productTitle:{
        fontWeight:"bold",
        color:"#ffffff",
        marginBottom:10
    },
    productDescription:{
        color:"#cccccc",
        marginBottom:10
    },
    productLocation:{
        color:"#ffffff",
        marginBottom:5
    },
    productUnits:{
        color:"#ffffff",
        marginBottom:5
    },
    productPricePerUnit:{
        fontWeight:"bold",
        color:"#00ff00",
        marginBottom:5  
    },
    productSeller:{
        color:"#ffffff",
        marginBottom:0
    },

})