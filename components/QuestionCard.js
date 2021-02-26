import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Button } from './atoms';

export default ({ question, isCorrectAnswer, isWrongAnswer }) => {
  return (
    <View>
      <Text>{ question.question }</Text>
      <Button onPress={isCorrectAnswer}>
        <Text>Yes</Text>
      </Button>
      <Button onPress={isWrongAnswer}>
        <Text>No</Text>
      </Button>
    </View>
  );
};

