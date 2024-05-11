import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation()
    useEffect(()=>{
    setTimeout(()=>{
    navigation.navigate("Login")
    },2000)
    },[])
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor={'purple'} barStyle={'light-content'}/>
     <Text style={styles.logo}>PollPro</Text>
     <Text style={styles.tagline}>post polls and get reviews by community</Text>
    </View>
  )
}

export default Splash
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',alignItems:'center'
    },
    logo:{
        color:'white',
        fontSize:40,
        fontWeight:'800'
    },
    tagline:{
        color:'white',
        fontSize:14,
        fontWeight:'600',
        marginTop:10
    }
})