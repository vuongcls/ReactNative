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
import Cpntwo from './cpntwo';
import App from '../App';

const Cpnone = (props) => {
  return (
    <View>
      <Text>{props.name} Vương</Text>
      <Cpntwo tuoi="Năm nay tôi: 25 tuổi ">
      </Cpntwo>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Cpnone;
