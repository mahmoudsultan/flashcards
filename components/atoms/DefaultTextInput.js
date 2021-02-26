import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default ({ style, ...props }) => {
  return (
    <TextInput
      style={ { ...styles.input, ...style } }
      { ...props }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fafafa',
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    borderStyle: 'solid',
    marginTop: 20,
    borderRadius: 5,
    borderEndColor: '#000',
    borderWidth: 2
  }
});
