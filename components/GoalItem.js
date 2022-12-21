import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({item}) => {
  return (
    <View style={[styles.goals, styles.shadow]}>
      <Text>{item}</Text>
    </View>
  );
};  


const styles = StyleSheet.create({
  goals: {
    fontSize: 16,
    padding: 12,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    marginVertical: 5,
  },
  shadow: {
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default GoalItem;
