import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [Goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = setEnteredText => {
    setGoal(setEnteredText);
  };
  const addGoalHandler = () => {
    //setCourseGoals([...courseGoals,Goal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: Goal }
    ]);
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
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
