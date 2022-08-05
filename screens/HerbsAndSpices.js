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

export default class HerbsAndSpices extends React.Component{
    render() { 
        return ( 
        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/six.png")}
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
                <Text style={styles.schedule}>Herbs and Spices</Text>
            </View>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/salt.jpg")}/>
              <Text style={styles.appleText}>Salt</Text>
              <Text style={styles.detailsSalt}>Cal: 0</Text>
              <Text style={styles.detailsSalt}>Fat: 0 g</Text>
              <Text style={styles.detailsSalt}>Cholesterol: 0 mg</Text>
              <Text style={styles.detailsSalt}>Sodium: 38,758 mg</Text>
              <Text style={styles.detailsSalt}>Potassium: 8 mg</Text>
              <Text style={styles.detailsSalt}>Carbs: 0 g</Text>
              <Text style={styles.detailsSalt}>Protein: 0 g</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/basil.jpg")}/>
              <Text style={styles.appleText}>Basil</Text>
              <Text style={styles.detailsBasil}>Cal: 22</Text>
              <Text style={styles.detailsBasil}>Fat: 0.6 g</Text>
              <Text style={styles.detailsBasil}>Cholesterol: 0 mg</Text>
              <Text style={styles.detailsBasil}>Sodium: 4 mg</Text>
              <Text style={styles.detailsBasil}>Potassium: 295 mg</Text>
              <Text style={styles.detailsBasil}>Carbs: 2.7 g</Text>
              <Text style={styles.detailsBasil}>Protein: 3.2 g</Text>
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
     color: "#46A79E",
     fontFamily: "Bubblegum-Sans",
        },
    ImgBg: {
     resizeMode: "cover",
     flex: 1
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
    create: {
        borderRadius: 10,
        backgroundColor: "#473e57",
        height: 470,
        width: 470,
        left: 35,
        top: 30,
        marginTop: 20
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
    detailsSalt: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "#f0efe9"
        },
    detailsBasil: {
     alignSelf: "center",
     justifyContent: "center",
     fontSize: 20,
     fontWeight: "bold",
     color: "#54a85e"
        },
        
})