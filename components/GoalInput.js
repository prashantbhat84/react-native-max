import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [Goal, setGoal] = useState('');
  const goalInputHandler = setEnteredText => {
    setGoal(setEnteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter your Goal'
        placeholderTextColor='black'
        style={styles.inputBox}
        onChangeText={goalInputHandler}
        value={Goal}
      />
      <Button title='Add' onPress={() => props.onAddGoal(Goal)} />
    </View>
  );
};
const styles = StyleSheet.create({
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

export default GoalInput;
