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
      <View style={[styles.rectangle, {backgroundColor: 'red'}]}></View>
      <View style={[styles.rectangle, {backgroundColor: 'green'}]}></View>
      <View style={[styles.rectangle, {backgroundColor: 'blue'}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
  },
  rectangle: {
    width: 100,
    //height: 100,
  },
});

// 3 thuộc tính quan trọng là flexDirection, justifyContent, alignItems

export default App;
