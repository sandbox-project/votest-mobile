import React, {Component} from 'react';
import { View, Text, Button, Alert} from 'react-native';
import s from './votingPageStyle';
import IO from 'socket.io-client';

class votingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {socket: null};
  }

  initSocket () {
    const socket = IO('https://votest-api.herokuapp.com/')
    socket.emit('join', {room: this.props.id});
    this.setState({socket})
  }

  componentWillMount() {
    this.initSocket();
  }

  _vote (id) {
    Alert.alert(
      this.props.poll.question,
      this.props.poll.answers[id].answer,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {
          fetch(`https://votest-api.herokuapp.com/api/poll/${this.props.id}/${id}`, {method: 'PUT'})
            .then(resp => {
              const {socket} = this.state;
              socket.emit('vote');
            })
        }}
      ],
      { cancelable: false }
    )
  }

  _renderAnswers () {
    let answers = [];
    const obj = this.props.poll.answers;

    for (let ans in obj) {
      answers.push(
        <Button
          key={ans}
          title={obj[ans].answer}
          style={s.answersButtons}
          onPress={() => this._vote(ans)}
        />
      )
    }

    return answers;
  }

  render() {
    return (
      <View style={s.global}>
        <View style={s.question}>
          <View>
            <Text style={s.title}>{this.props.poll.question}</Text>
          </View>
        </View>
        <View style={s.answers}>
          {this._renderAnswers()}
        </View>
      </View>
    );
  }
}

export default votingPage;