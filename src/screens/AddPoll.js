import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import OptionItem from '../components/OptionItem';
import CustomButton from '../components/CustomButton';

const AddPoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    {value: '', key: 0},
    {value: '', key: 1},
  ]);
  const editOption = (item, ind, txt) => {
    let tempOptions = options;

    tempOptions.map((item, index) => {
      if (ind == index) {
        item.value = txt;
      }
    });
    let temp = [];
    tempOptions.map(item => {
      temp.push(item);
    });
    setOptions(temp);
  };
  const addOption = () => {
    let tempOptions = options;
    tempOptions.push({value: '', key: options.length});
    let temp = [];
    tempOptions.map(item => {
      temp.push(item);
    });
    setOptions(temp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.captionArea}>
        <TextInput
          placeholder="Enter your question here..."
          value={question}
          onChangeText={setQuestion}
          multiline
        />
      </View>
      {options.map((item, index) => {
        return (
          <OptionItem
            item={item}
            onChangeText={txt => {
              console.log(txt);
              editOption(item, index, txt);
            }}
          />
        );
      })}
      <Text
        style={{
          padding: 10,
          borderWidth: 1,
          width: 100,
          marginLeft: 20,
          marginTop: 20,
          color: 'black',
        }}
        onPress={addOption}>
        Add More
      </Text>

      <CustomButton title={'Post Poll'} onClick={()=>{
        
      }}/>
    </View>
  );
};

export default AddPoll;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  captionArea: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
});
