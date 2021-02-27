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

import Cpnone from './components/cpnone';

/* Component gọi component và truyền dữ liệu với props */

const App: () => React$Node = () => {
  return (
      <Cpnone name="Tôi tên là: " />
  );
};

const styles = StyleSheet.create({});

export default App;
