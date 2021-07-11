import React from 'react';
import {TextInput,StyleSheet, Text} from 'react-native';

export  function Input({ style,...props}) {
  return <TextInput {...props} style={[styles.input,style]} />
}
const styles = StyleSheet.create({
 input:{
     backgroundColor: '#e8e8e8',
     padding: 20,
     width: '100%',
     borderRadius:8,

 }
})