import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Styles} from './src/common';

//cách viết objects
// const rectangle = {
//   width: 200,
//   height: 100,
//   backgroundColor: 'blue',
// };

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const {isActive} = this.state;
    return (
      <View>
        <View
          //cách viết style inline
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'red',
          }}></View>

        <View style={Styles.rectangle}></View>

        {/* Header */}
        <View
          style={[
            styles.header,
            // styles.backgroundRed,
            {borderColor: 'yellow'},
            isActive ? styles.backgroundRed : styles.backgroundGreen,
          ]}></View>
      </View>
    );
  }
}

//cách viết styleSheet
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    borderWidth: 4,
    // borderColor: 'gray',
    marginTop: 4,
  },
  backgroundRed: {
    backgroundColor: 'red',
  },
  backgroundGreen: {
    backgroundColor: 'green',
  },
});
