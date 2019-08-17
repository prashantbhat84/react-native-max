import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAtMode, setIsAtMode] = useState(false);

  const addGoalHandler = goalTitle => {
    //setCourseGoals([...courseGoals,Goal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAtMode(false);
  };
  const removeGoalHandler = id => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };
  const cancelGoalAdd = () => {
    setIsAtMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAtMode(true)} />
      <GoalInput
        visible={isAtMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdd}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            //onDelete={removeGoalHandler.bind(this, itemData.item.id)} method 1 for delete
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
