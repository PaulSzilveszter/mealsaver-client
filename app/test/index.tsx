import React from "react"
import { View, StyleSheet, Text, ScrollView, Button } from "react-native"
import SvgQRCode from "react-native-qrcode-svg"
import { generateRandomHexString } from "../../functions/CryptoFunctions"
import { getAllPosts } from "../../functions/ServerFunctions"


export default function SignIn() {
    const randomHex = generateRandomHexString()
    
    console.log("Random Hex", randomHex);
    
    return (



        <ScrollView style={styles.scrollview}>

            <SvgQRCode value={randomHex.toString()}/>

            <Button title={"Test"} onPress={async() => {
                console.log(await getAllPosts())
            }} />

            
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    scrollview: {
        //   flex:1,
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        color: "white"
    }
})