import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
    return (
        <>

            <View style={styles.footer}>
                <Link href="/market"><FontAwesome name="shopping-basket" size={30} color="#AFD3E2" /></Link>

                <Link href="/add-product">
                    <FontAwesome name="plus-square" size={30} color="#AFD3E2" />
                </Link>


                <Link href="/profile"><FontAwesome name="user" size={30} color="#AFD3E2" /></Link>


            </View>

        </>
    )
}
const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        height: 55,
        width: "100%",
        backgroundColor: "#008200",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})
