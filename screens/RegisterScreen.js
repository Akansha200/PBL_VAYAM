import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { TouchableOpacity } from 'react-native';
const RegisterScreen = props => {
    return (
        <View style={styles.screen}>
          <Text style={styles.heading}>REGISTER</Text>
            <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#767C77"
        />
            <TextInput
          placeholder="Hospital Name"
          style={styles.input}
          placeholderTextColor="#767C77"
        />
        <TextInput
          placeholder = "Email"
          style={styles.input}
          keyboardType = 'email-address'
        placeholderTextColor="#767C77"
        />
         <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#767C77"
          
        />
        
          <TouchableOpacity style={styles.button}>
            <Text style={styles.head} color="purple"onPress={() => props.hospitalButton(2)} >REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => props.hospitalButton(2)} >
          <Text style={styles.text }  >Already have an account?Login one</Text>
          </TouchableOpacity>
        </View>
    
    )
}
const styles = StyleSheet.create({
  screen: {
    flex : 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor:'white'
},
    input: {
      width: '90%',
      borderColor: '#ccc',
      borderWidth: 0.2,
      borderRadius:6,
     padding:15,
     marginBottom:15,
     color:'blue',
     justifyContent:'center',
     backgroundColor:'#F3F3F3'
     
    },
    head:{
fontSize: 20,
color:'white',
textAlign:'center'
    },
    button: {
      width: '90%',
      color:'black',
      backgroundColor:'purple',
      borderRadius:8,
      marginTop:20,
      padding:16
    },
    text:{
        fontSize: 16,
        marginTop:15,
        color:'navy'
    },
    heading:{
      paddingBottom: 55,
      padding: 50,
      fontSize:50,
      fontWeight:'bold',
      color:'#707070'
     
    }
  });
  
  export default RegisterScreen;