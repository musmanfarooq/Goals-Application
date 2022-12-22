import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({addGoal, enterGoal, goals}) => {

  return (
    <View style={[styles.displayflex, styles.marginbottom]}>
      <TextInput
        placeholder="Enter your Goal"
        placeholderTextColor="rgba(51, 51, 51, 0.3)"
        style={[styles.input, styles.shadow]}
        onChangeText={enterGoal}
        value= {goals}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  displayflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    backgroundColor: 'whitesmoke',
    borderRadius: 8,
    marginRight: 10,
    width: '70%',
    color: 'black',
  },
  shadow: {
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  marginbottom: {
    marginBottom: 18,
  },
});
