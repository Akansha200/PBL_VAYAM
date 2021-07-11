import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
const LoginScreen = props => {
    return (
        <View style={styles.inputContainer}>
          <Text style={styles.heading}>LOGIN</Text>
        <TextInput
          placeholder="Email"
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
            <Text style={styles.head} onPress={() => props.onLogin(1)} >LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => props.hospitalButton(1)} >
          <Text style={styles.text}  >Have u an account? Create one</Text>
          </TouchableOpacity>
         
        </View>
    
    )
}
const styles = StyleSheet.create({
    inputContainer: {
      flex : 1,
      padding: 10,
      alignItems: 'center',
      backgroundColor:'white'
    },
    heading:{
      paddingBottom: 55,
      padding: 50,
      fontSize:50,
      fontWeight:'bold',
      color:'#707070'
     
    },
  
      head:{
        fontSize: 20,
        color:'white',
        textAlign:'center'
    },
    input: {
      width: '90%',
      borderColor: 'blue',
      borderWidth: 0.2,
     padding:15,
     marginBottom:35,
     color:'blue',
     justifyContent:'center',
     borderRadius:5,
     backgroundColor:'#F3F3F3'
    },
    button: {
      width: '90%',
      color:'black',
      backgroundColor:'purple',
      borderRadius:8,
      marginTop:18,
      padding:16
    },
    text:{
      fontSize: 20,
      marginTop: 22,
      color:'navy'
    }
  });
  
  export default LoginScreen;