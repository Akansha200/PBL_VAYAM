import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 
import Card from '../Constant/Card';

const firstScreeen = props =>{
    return(
        <View>
    <View style={styles.container}>
      <Text style={styles.heading}> DOCTORS</Text>
      </View>
      <View style={styles.con}>
      <Card style={styles.summary}>
          
            <Text style={styles.nameDr}> Dr. Sunil Kumar B</Text>

           <Button title=" Patients" color={'blue'} onPress={() =>props.onLogin(2)}  />
           
        </Card>
        
        </View>
        <View style={styles.con}>
      <Card style={styles.summary}>
          
            <Text style={styles.nameDr}> Dr. Padmanadam</Text>

           <Button title=" Patients"color={'blue'} onPress={() =>props.onLogin(2)}/>
           
        </Card>
        
        </View>
        <View style={styles.con}>
      <Card style={styles.summary}>
          
            <Text style={styles.nameDr}> Dr. Sakura</Text>

           <Button title=" Patients" color={'blue'} onPress={() =>props.onLogin(2)}/>
           
        </Card>
        
        </View>
        <View style={styles.con}>
      <Card style={styles.summary}>
          
            <Text style={styles.nameDr}> Dr. Tsunade</Text>

           <Button  title=" Patients" color={'blue'} onPress={() =>props.onLogin(2)}/>
           
        </Card>
        
        </View>
        </View>
   
    )};

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 36,
        paddingTop:10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading:{
        fontSize:42,
        textAlign:'center',
        fontWeight:'bold',
        color:'navy',
        fontStyle:'normal',
        
    
      },
      nameDr:{fontSize:20,
color:'#962304'
      },
      con:{
          alignItems:'center',
          
      },
      summary :{
          width:'80%',
        marginTop: 20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'space-between',
color:'#add8e6',
backgroundColor:'#add8e6'

    }

});

export default firstScreeen;