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

import Cpnthree from '../cpnthree';  // .. là nhảy ra 1 cấp


const Cpntwo: () => React$Node = (props) => {
  return (
    <View>
      <Text>{props.tuoi}</Text>
      <Text>Hiện đang sống tại hcm</Text>
      <Cpnthree/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Cpntwo;
