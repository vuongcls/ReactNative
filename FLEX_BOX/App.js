import React from 'react';
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

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={styles.topLeftOne}></View>
          <View style={styles.topLeftTwo}></View>
        </View>
        <View style={styles.topRight}></View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}></View>
        <View style={styles.bottomCenter}></View>
        <View style={styles.bottomRight}>
          <View style={styles.bottomRightOne}></View>
          <View style={styles.bottomRightTwo}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    flex: 6,
    // backgroundColor: 'red',
  },
  topLeft: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  topLeftOne: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'black',
  },
  topLeftTwo: {
    flex: 3,
    borderWidth: 5,
    borderColor: 'black',
  },
  topRight: {
    flex: 5,
    backgroundColor: 'red',
    borderWidth: 5,
  },
  bottom: {
    flexDirection: 'row',
    flex: 3,
    // backgroundColor: 'yellow',
  },
  bottomLeft: {
    flex: 3,
    backgroundColor: 'blue',
    borderWidth: 5,
  },
  bottomCenter: {
    flex: 6,
    backgroundColor: 'white',
    borderWidth: 5,
  },
  bottomRight: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: 'yellow',
    borderWidth: 5,
  },
  bottomRightOne: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2.5,
  },
  bottomRightTwo: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 2.5,
  },
});

export default App;
