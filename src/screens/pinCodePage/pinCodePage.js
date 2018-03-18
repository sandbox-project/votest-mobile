import React, {Component} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import s from './pinCodePageStyle';

class pinCodePage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _vote() {
    return fetch(`https://votest-api.herokuapp.com/api/poll/${this.state.text}`)
      .then(response => response.json())
      .then(data => {
        let poll = data.response;
        this.props.navigator.push({
          screen: 'votestMobile.votingPage',
          passProps: { 
            poll,
            id: this.state.text,
          },
          navigatorStyle: {
            navBarHidden: true
          }
        });
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
