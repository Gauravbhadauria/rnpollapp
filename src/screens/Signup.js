import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <CustomTextInput
        mt={50}
        placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      <CustomTextInput
        placeholder={'Enter Email'}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      <CustomTextInput
        placeholder={'Enter Password'}
        value={password}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />

      <CustomButton title={'Sign Up'} onClick={() => {}} />
      <Text style={styles.signup}>
        {'Already have Account ?  '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            navigation.goBack();
          }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
    fontWeight: '600',
    color: 'black',
    fontSize: 16,
  },
  signup: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },
});
