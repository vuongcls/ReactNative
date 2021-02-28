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


const Hi: () => React$Node = (props) => {
  return (
    <>
      <Text>{props.abc}</Text>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Hi;
