import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Timer from './components/Timer';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]);
    setAddMode(false)
  };

  const deleteGoal = (goalKey) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey)
    })
  };

  const cancelGoalAdd = () => {
    setAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>P🍅modoro Productivity</Text>
      </View>
      <Timer />
      <View style={styles.goals}>
      <Button title="ADD NEW GOAL" onPress={() => setAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} mode={addMode} onCancel={cancelGoalAdd}/>
      <View style={styles.listContainer}><FlatList 
      data={goals} 
      renderItem={ (itemData) => (
        <GoalItem 
          id={itemData.item.key} 
          item={itemData.item.value} 
          onDelete={deleteGoal}
        />
      )}
      /></View>
      </View>
      
      
    </View> 
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: '40%',
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#ff6961'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5
  },
  goals:{
    paddingHorizontal: 50
  }
  
  
});