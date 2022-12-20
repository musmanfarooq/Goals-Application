import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function enterGoalHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler(enteredText) {
    setCourseGoals((currentgoals) => [
      ...currentgoals,
      { text: goal, id: Math.random().toString() },
    ]);
    // setGoal("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={[styles.displayflex, styles.marginbottom]}>
        <TextInput
          placeholder="Enter your Goal"
          style={[styles.input, styles.shadow]}
          onChangeText={enterGoalHandler}
          value={goal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
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
              <View style={[styles.goals, styles.shadow]}>
                <Text>{itemData.item.text}</Text>
              </View>
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
    fontWeight: "600",
    marginBottom: 18,
  },
  displayflex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    marginRight: 10,
    width: "70%",
  },
  shadow: {
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    elevation: 2,
  },
  marginbottom: {
    marginBottom: 18,
  },
  goals: {
    fontSize: 16,
    padding: 12,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    marginVertical: 5,
  },
});
