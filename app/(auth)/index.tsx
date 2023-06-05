import { Slot } from "expo-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AuthProvider } from "../../context/auth";

import { View, StyleSheet } from "react-native";


export default function Layout() {
  return (

    <AuthProvider>
      <View style={styles.layoutWrapper}>

        <Header></Header>
        <Slot></Slot>
        <Footer />
     
      </View>
    </AuthProvider>

  )
}

const styles = StyleSheet.create({
  layoutWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "lime",
    color: "white"
  }
})

