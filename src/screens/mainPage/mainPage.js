import React, {Component} from 'react';
import { View, Text, Button} from 'react-native';
import s from './mainPageStyle';

class mainPage extends Component {
  _goToCreate() {
    this.props.navigator.push({
      screen: 'votestMobile.createPage',
      navigatorStyle: {
          navBarHidden: true
        }
    });
  }

  _goToVote() {
    this.props.navigator.push({
      screen: 'votestMobile.pinCodePage',
      navigatorStyle: {
          navBarHidden: true
        }
    });
  }

  render() {
    return (
      <View style={s.global}>
        <View style={s.buttons}>
            <Button 
              title="Create poll"
              onPress={this._goToCreate.bind(this)}
            />
            <Button 
              title="Vote in pull"
              onPress={this._goToVote.bind(this)}
            />
        </View>
      </View>
    );
  }
}

export default mainPage;
