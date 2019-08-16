import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [Goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = setEnteredText => {
    setGoal(setEnteredText);
  };
  const addGoalHandler = () => {
    //setCourseGoals([...courseGoals,Goal]);
    setCourseGoals(currentGoals => [...currentGoals, Goal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your Goal'
          placeholderTextColor='black'
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={Goal}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(courseGoal => (
          <Text key={courseGoal}>{courseGoal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputBox: {
    borderColor: 'red',
    borderWidth: 1,
    width: '80%'
  }
});
