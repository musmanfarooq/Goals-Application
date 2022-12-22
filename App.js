import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function enterGoalHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    if (goal !== '') {
      setCourseGoals((currentgoals) => [
        ...currentgoals,
        { text: goal, id: Math.random().toString() },
      ]);
      setGoal('');
    }
  }

  function deleteGoalHandler(id) {
    console.log(id);
    // setCourseGoals((currentgoals) => {
    //   return currentgoals.filter((goal) => {
    //     goal.id !== id;
    //   });
    // });
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <GoalInput
          addGoal={addGoalHandler}
          enterGoal={enterGoalHandler}
          goals={goal}
        />
      </View>
      <View>
        <Text style={styles.heading}>List of All Goals</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item.text}
                id={itemData.item.id}
                deleteGoals={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 18,
  },
});
