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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textTop}>0</Text>
        </View>
        <View style={styles.under}>
          <View style={styles.underLeft}>
            <Text style={styles.textUnderLeft}>+</Text>
          </View>
          <View style={styles.underRight}>
            <Text style={styles.textUnderRight}>-</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const TEXT = {
  color: '#ffffff',
  fontSize: 50,
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  top: {
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  under: {
    flex: 1,
    flexDirection: 'row',
  },
  underLeft: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underRight: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    ...TEXT,
  },
  textUnderLeft: {
    ...TEXT,
  },
  textUnderRight: {
    ...TEXT,
  },
});

export default App;
