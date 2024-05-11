import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import PollItem from '../components/PollItem';

const Home = () => {
  const navigation = useNavigation();
  const [polls,setPolls]=useState([1,1,1,1,1,1])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Pollpro</Text>
      </View>
      <FlatList data={polls} renderItem={()=>{
        return(
          <PollItem />
        )
      }}/>
      <TouchableOpacity style={styles.addBtn}
      onPress={()=>{
        navigation.navigate("AddPoll")
      }}>
        <Text style={styles.addBtnText}>Add New Poll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'purple',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  logo: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  addBtn: {
    backgroundColor: 'purple',
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
    right: 20,
    padding: 20,
  },
  addBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
