import * as React from "react"
import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StyleSheet, 
    Image,
    Platform,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    } from "react-native"

export default class BakeryProducts extends React.Component{
    render() { 
        return ( 
        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/two.png")}
            style={styles.ImgBg}>
            <View style={{flex: 0.3, justifyContent: "center", alignItems: "center"}}>
                <Image 
                style={styles.appIcon}
                source={require("../assets/logo.png")}/>
            </View>

            <View> 
                <Image 
                style={styles.appName}
                source={require("../assets/name.png")}/>
            </View>

            <View style={{flex: 0.1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <Text style={styles.schedule}>Bakery Products</Text>
            </View>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/bread.jpg")}/>
              <Text style={styles.appleText}>Wheat bread</Text>
              <Text style={styles.detailsbread}>Cal: 247</Text>
              <Text style={styles.detailsbread}>Fat: 3.4 g</Text>
              <Text style={styles.detailsbread}>Cholesterol: 0 mg</Text>
              <Text style={styles.detailsbread}>Sodium: 400 mg</Text>
              <Text style={styles.detailsbread}>Potassium: 248 mgg</Text>
              <Text style={styles.detailsbread}>Carbs: 41 g</Text>
              <Text style={styles.detailsbread}>Protein: 13 g</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/muffin.jpg")}/>
              <Text style={styles.appleText}>Healthy Muffins</Text>
              <Text style={styles.detailsmuffins}>Cal: 296</Text>
              <Text style={styles.detailsmuffins}>Fat: 11 g</Text>
              <Text style={styles.detailsmuffins}>Cholesterol: 39 mg</Text>
              <Text style={styles.detailsmuffins}>Sodium: 467 mg</Text>
              <Text style={styles.detailsmuffins}>Potassium: 121 mgg</Text>
              <Text style={styles.detailsmuffins}>Carbs: 41 g</Text>
              <Text style={styles.detailsmuffins}>Protein: 7 g</Text>
            </TouchableOpacity>

            </ImageBackground>
            </ScrollView>
            </View> 
            ) 
            }
}

const styles= StyleSheet.create({
    container: {
     flex:1,
     justifyContent: "center",
     alignItems: "center"
       },
    droidSafeArea: { 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
       },
    appIcon:{
     height: 150,
     width: 150,
     marginTop: 100,
     marginBottom: 100
       },
    appTitle: {
     fontSize: 40,
     color: "#E2AD01",
     fontFamily: "Bubblegum-Sans",
     marginTop: 30,
     marginBottom: 30,
        },
    schedule: {
     fontSize: 20,
     color: "#7F62B6",
     fontFamily: "Bubblegum-Sans",
        },
    ImgBg: {
     resizeMode: "cover",
     flex: 1
        },
    create: {
     borderRadius: 10,
     backgroundColor: "#473e57",
     height: 470,
     width: 470,
     left: 35,
     top: 30,
     marginTop: 20
        },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 15,
        color: "white",
    },
    appName: {
        height: 125,
        width: 500,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 70,
        alignSelf: "center"
    },
    apple: {
        height: 200,
        width: 200,
        marginTop: 30,
        marginLeft: 140
       },
    appleText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center"
       },
    detailsmuffins: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "#c68345"
        },
    detailsbread: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "#d6bb8b"
        },
})