import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  _increase() {
    this.setState({
      result: this.state.result + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentTop}>
          <Text style={styles.textTop}>{this.state.result}</Text>
        </View>
        <View style={styles.contentBottom}>
          <TouchableOpacity onPress={this._increase.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.textbutton}>Click ME!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const TEXT = {
  color: 'white',
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentTop: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    ...TEXT,
    fontSize: 50,
  },
  contentBottom: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 264,
    borderColor: 'white',
    borderWidth: 2,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbutton: {
    ...TEXT,
    fontSize: 14,
  },
});
