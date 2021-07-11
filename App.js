import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';



import StartAppScreen from './screens/StartAppScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import First from'./comps/firstScreen';
import Patient from './comps/patients1';


export default function App() {

 const [userOption,setUserOption] = useState();
 const [userLogin,setUserLogin] = useState();


 const hospitalHandler = (dg) =>{
   setUserOption(dg);
 }

 const afterLoginHandler =(hi) =>{
   setUserLogin(hi);
 }

 let content = <StartAppScreen hospitalButton = {hospitalHandler}/>; 
 
 if (userOption===1){
   content = <RegisterScreen hospitalButton = {hospitalHandler}/>;
 }else if (userOption===2){
     content = <MainScreen hospitalButton = {hospitalHandler} onLogin ={afterLoginHandler}/>
   }

   if (userLogin===1){
     content =<First onLogin ={afterLoginHandler}/>
   }else if (userLogin===2){
     content = <Patient/>
   }
   
  
  
  
  
   return (

    <View style={styles.screen}>
   
  
    {content}
   
    </View>
    
  );
}

const styles = StyleSheet.create({
  
  screen: {
    flex: 1, 
  },
});