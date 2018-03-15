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
    fontSize: 18,
    textAlign: 'center'
  },

  modal: {
    flex: 1,
    justifyContent: 'space-between', 
    maxHeight: 170,
    padding: 25
  }

});
