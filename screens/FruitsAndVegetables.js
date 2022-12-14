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

export default class FruitsAndVegetables extends React.Component{
    render() { 
        return ( 
        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/one.png")}
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
                <Text style={styles.schedule}>Fruits and Vegetables</Text>
            </View>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/apple.jpg")}/>
              <Text style={styles.appleText}>Apple</Text>
              <Text style={styles.detailsapple}>Cal: 95</Text>
              <Text style={styles.detailsapple}>Fat: 0 gram</Text>
              <Text style={styles.detailsapple}>Protein: 1 gram</Text>
              <Text style={styles.detailsapple}>Carbs: 25 grams</Text>
              <Text style={styles.detailsapple}>Sugar(naturally occuring): 19 grams</Text>
              <Text style={styles.detailsapple}>Fiber: 3 grams</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/carrot.jpg")}/>
              <Text style={styles.appleText}>Carrot</Text>
              <View>
              <Text style={styles.detailscarrot}>Cal: 41</Text>
              <Text style={styles.detailscarrot}>Water: 88%</Text>
              <Text style={styles.detailscarrot}>Protein: 0.9 grams</Text>
              <Text style={styles.detailscarrot}>Carbs: 9.6 grams</Text>
              <Text style={styles.detailscarrot}>Sugar: 4.7 grams</Text>
              <Text style={styles.detailscarrot}>Fiber: 2.8 grams</Text>
              <Text style={styles.detailscarrot}>Fat: 0.2 grams</Text>
              </View>
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
     color: "#735DA9",
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
    // alignItems: "center",
    // justifyContent: "center",
     left: 35,
    // right: 220,
     top: 30,
    // bottom: 100
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
    detailsapple: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "red"
        },
    detailscarrot: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "#E2AD01"
        },
})