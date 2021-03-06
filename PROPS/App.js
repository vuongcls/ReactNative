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
import Hello from './src/components/Hello';

const App: () => React$Node = () => {
  return (
    <>
      <Hello
        truyenvao="Võ Long Vương"
        content="Xin chào mọi người! "
        noidung="React-native"
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
