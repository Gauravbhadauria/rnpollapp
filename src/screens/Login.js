import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation=useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>Login</Text> 
      <CustomTextInput mt={50}  placeholder={'Enter Email'} value={email} onChangeText={txt=>{
setEmail(txt)
      }}/>
       <CustomTextInput placeholder={'Enter Password'} value={password} onChangeText={txt=>{
setEmail(txt)
      }}/>
      <Text style={styles.forgot}>forgot password?</Text>
      <CustomButton title={"Login"} onClick={()=>{
       navigation.navigate("Home")
      }} />
      <Text style={styles.signup}>{"New User ?  "}<Text style={{textDecorationLine:'underline'}} onPress={()=>{
        navigation.navigate("Signup")
      }}>Sign Up</Text></Text>
    </View>
  )
}

export default Login
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    heading:{
        fontSize:30,fontWeight:'600',color:'black',
        alignSelf:'center',
        marginTop:50
    },
    forgot:{
        alignSelf:'flex-end',
        marginRight:20,
        marginTop:10,
        fontWeight:'600',
        color:'black',
        fontSize:16
    },signup:{
      fontSize:16,fontWeight:'600',color:'black',
      alignSelf:'center',
      marginTop:50
    }
})