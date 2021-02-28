import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Hi from '../../Hi'; // nhảy ra 2 cấp

const Hello: () => React$Node = (props) => {
  const data = props.truyenvao;
  Alert.alert('Thông báo: ' + data);

  return (
    <>
      <Text>{props.content}</Text>
      <Text>{props.noidung}</Text>
      <Hi abc="Thực hành props trong react-native"></Hi>
    </>
  );
};

const styles = StyleSheet.create({});

export default Hello;
