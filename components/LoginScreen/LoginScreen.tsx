import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Button } from "react-native";

import { loginUser, registerNewUser } from '../../functions/ServerFunctions';
import { useAuth } from '../../context/auth';
import { SERVER_URL } from '../../constants/ServerConstants';


export default function LoginScreen() {

  console.log(`Server URL is ${SERVER_URL}`)

  const AuthContext = useAuth()
  

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");    
  const [password, setPassword] = useState("");      


  return (
  
      <View >
        <Text>
            Sal
        </Text>
        <TextInput  
          placeholder={'username'}
          secureTextEntry={false}
          onChangeText={(text)=>{
            setUsername(text)
            console.log(username);
          }}
        />
        <TextInput  
          placeholder={'email'}
          secureTextEntry={false}
          onChangeText={(text)=>{
            setEmail(text)
            // console.log(email);
          }}
        />
        <TextInput  
          placeholder={'password'}
          secureTextEntry={true}
          onChangeText={(text)=>{
            setPassword(text)
            
          }}
        />
        <Button
          title={'Register'}
          onPress={async()=> {await registerNewUser(username, email, password)}}
        />
        <Button
          title={'Login'}
          onPress={async()=> {

            console.log("AUTH CONTEXT: ",AuthContext)

            try{
              await loginUser(username, email, password)
              AuthContext.signIn({username, email, password})
            }catch (e){
              console.log(e)
            }


          }}
        />
         <Button
          title={'Show data'}
          onPress={()=> {

            console.log(AuthContext.user);

          }}
        />

      </View>
    
    )
  }