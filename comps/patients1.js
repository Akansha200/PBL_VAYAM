import React,{useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity ,FlatList , alert} from 'react-native'; 


import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const PatientsList = props =>{
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
  
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    
  
    return (
       
            
      <TouchableOpacity style={styles.screen}>
        <Text style={styles.btn} title="Add New Patients" onPress={() => setIsAddMode(true)} >Add New Patients</Text>
        
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </TouchableOpacity>
      
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50,
       backgroundColor:'#FAD5AD',
        paddingTop:100,
        
       
      },
      btn:{
      height: 50,
      fontSize:25,
      textAlign:'center',
      backgroundColor:'navy',
      padding:8,
      color:'white',
      borderRadius:8
      }
});

export default PatientsList;