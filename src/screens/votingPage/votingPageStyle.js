import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

  global: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },

  question: {
    height: '50%',
    flex: 1,
    justifyContent: 'center'
  },

  answers: {
    height: '50%',
    flex: 1,
    justifyContent: 'space-around',
    padding: 20
  }

});
