import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [Goal, setGoal] = useState('');
  const goalInputHandler = setEnteredText => {
    setGoal(setEnteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(Goal);
    setGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your Goal'
          placeholderTextColor='black'
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={Goal}
        />
        {/* <Button title='Add' onPress={() => props.onAddGoal(Goal)} />*/}
        <View style={styles.buttonalignment}>
          <View style={styles.buttonsize}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.buttonsize}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    borderColor: 'red',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10
  },
  buttonalignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  buttonsize: {
    width: '30%'
  }
});

export default GoalInput;
