import React from 'react';
import { Text, View, Pressable } from 'react-native';

export default ({ navigation, route }) => {
  const deckId = route.params.deckId;

  return (
    <View>
      <Text>Deck View</Text>
      <Pressable 
        onPress={() => navigation.navigate('NewQuestion', { deckId })}
      >
        <Text>Add Question</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate('Quiz', { deckId })}
      >
        <Text>Start Quiz</Text>
      </Pressable>
    </View>
  );
};
