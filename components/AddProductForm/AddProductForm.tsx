import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Button, Image, Pressable } from "react-native";

import { loginUser, registerNewUser, addNewProduct } from '../../functions/ServerFunctions';
import { useAuth } from '../../context/auth';
import { Post } from '../../constants/ServerConstants';
import ImageViewer from '../ImageViewer';
import placeholderImage from '../../assets/images/splash.png'

import { pickImageAsync } from '../../functions/ImageFunctions';

export default function AddProductForm() {

  const [selectedImage, setSelectedImage] = useState(null);

  const AuthContext = useAuth()


  const [productType, setProductType] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [units, setUnits] = useState(0);
  const [location, setLocation] = useState("")


  const handleStringChange = (text: string, hook: any) => {
    console.log("NEW VALUE", text)
    hook(text)
  }
  const handleNumbericChange = (value: string, hook: any) => {
    // Remove any non-digit characters from the input
    const cleanedText = parseInt(value.replace(/[^0-9]/g, ''), 10);
    hook(cleanedText);
    console.log("NEW NUMBER", cleanedText)
  };

  return (


    <View style={styles.scrollview}>
      <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage} />
      <Pressable
        style={{ backgroundColor: '#fff' }}
        onPress={() => pickImageAsync(setSelectedImage)}
      ><Text>sss</Text>
      </Pressable>

      <TextInput placeholder={'Product Type'}
        secureTextEntry={false} onChangeText={(text) => {
          handleStringChange(text, setProductType)
        }}></TextInput>

      <TextInput keyboardType='numeric' placeholder={'Price Per Unit'}
        secureTextEntry={false}
        value={pricePerUnit}
        onChange={(e) => {
          handleNumbericChange(e.target.value, setPricePerUnit)
        }}></TextInput>

      <TextInput keyboardType='numeric' placeholder={'Number of units'}
        secureTextEntry={false}
        value={units}
        onChange={(e) => {
          handleNumbericChange(e.target.value, setUnits)
        }}></TextInput>

      <TextInput placeholder={'Location'}
        secureTextEntry={false} onChangeText={(text) => {
          handleStringChange(text, setLocation)
        }}></TextInput>

      <Button title={"Publish"} onPress={()=>{
        addNewProduct(productType, pricePerUnit, units, location);
      }}/>

    </View>


  )
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    justifyContent: 'flex-start', // Center items vertically
    alignItems: "center", // Center items horizontally

    height: "100%",
    width: "100%",
    backgroundColor: "#252525",
    color: "white",
  },
  imageContainer: {
    marginTop: 20,
    borderColor: "white",
    borderWidth: 3,
    height: 320,
    width: 200,
  }
})