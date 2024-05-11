import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import PollOptionItem from './PollOptionItem';

const PollItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topLeftView}>
          <Image
            source={require('../images/user.png')}
            style={styles.userImage}
          />
          <Text style={styles.username}>{'Gaurav Bhadauria'}</Text>
        </View>
      </View>
      <Text style={styles.question}>{'which mobile brand you use?'}</Text>
      <FlatList
        data={[
          {value: 'option 1', key: 0},
          {value: 'option 2', key: 1},
        ]}
        renderItem={({item,index}) => {
          return <PollOptionItem item={item} />;
        }}
      />
    </View>
  );
};

export default PollItem;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingBottom:20,
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  topView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
  },
  username: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
