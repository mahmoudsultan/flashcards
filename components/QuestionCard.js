import React, { useRef, useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

import { Text, View, Animated, StyleSheet } from 'react-native';

import { Button } from './atoms';

export default ({ question, isCorrectAnswer, isWrongAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(0);

  const flipCards = () => {
    setShowAnswer(true);
  }

  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Animatable.View animation={showAnswer ? "flipOutY" : 'flipInX'} style={styles.questionCard}>
          <Text style={styles.questionCardText}>{ question.question }</Text>
        </Animatable.View>
        <Animatable.View animation={showAnswer ? "flipInY" : 'fadeOut'} style={styles.answerCard}>
          <Text style={styles.answerCardText}>{ question.answer }</Text>
        </Animatable.View>
      </View>
      <View style={styles.buttonContainer}>
        {
          (showAnswer) ? (
            <View>
              <Text style={styles.selectAnswerTitle}>Did you get it right ?</Text>
              <View style={styles.selectAnswerContainer} animation="lightSpeedIn">
                <Button style={{ width: 200, backgroundColor: '#32CD32' }} onPress={isCorrectAnswer}>
                  <Text>Yes</Text>
                </Button>
                <Button style={{ width: 200, backgroundColor: '#EC4C4C' }} onPress={isWrongAnswer}>
                  <Text>No</Text>
                </Button>
              </View>
            </View>
          ) : (
            <View animation="lightSpeedIn">
              <Button onPress={flipCards}>
                <Text>Show Answer</Text>
              </Button>
            </View>
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cardContainer: {
    height: 300,
    maxHeight: 300,
    width: '80%',
    // flex: 2
  },
  questionCard: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  questionCardText: {
    fontSize: 30,
    color: 'black',
  },
  answerCard: {
    backgroundColor: '#32CD32',
    elevation: 2,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backfaceVisibility: 'hidden',
    top: 0,
    position: 'absolute',
    transform: [
      { rotateY: "180deg" }
    ]
  },
  answerCardText: {
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    // flex: 1
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectAnswerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  selectAnswerTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '300'
  }
});
