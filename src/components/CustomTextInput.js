import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({placeholder,value,onChangeText,error,mt}) => {
  return (
   <View style={{marginTop:mt?mt:20}}>
     <View style={styles.container}>
     <TextInput value={value} onChangeText={txt=>onChangeText(txt)} placeholder={placeholder} style={styles.input}/>
    
    </View>
    {error && error!='' ? <Text style={styles.error}>{error}</Text>:null}
   </View>
  )
}

export default CustomTextInput
const styles=StyleSheet.create({
    container:{
        width:'90%',
       
        borderWidth:1,
        borderColor:'#9e9e9e',
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        paddingLeft:10
    },
    input:{
        width:'80%',
        color:'black',
        fontSize:16,
        height:50
    },
    error:{
        marginTop:10,
        color:'red',
        marginLeft:20

    }
})

