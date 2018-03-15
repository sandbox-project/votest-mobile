import React, {Component} from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import s from './pinCodePageStyle';

class pinCodePage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _vote() {
    return fetch(`http://192.168.1.166:8000/api/v1/poll/${this.state.text}`)
      .then(response => response.json())
      .then(data => {
        let poll = data.response;
        Alert.alert(
          `Question: ${poll.question}`,
          `ChartType: ${poll.type}`,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      })
  }

  render() {
    return (
      <View style={s.global}>
        <View style={s.modal}>
          <Text style={s.title}>Enter vote PIN code:</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white', textAlign: 'center'}}
            onChangeText={(text) => this.setState({text})} 
          />
          <Button 
            title='Vote!'
            onPress={this._vote.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default pinCodePage;
