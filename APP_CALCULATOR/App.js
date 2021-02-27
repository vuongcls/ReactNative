import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
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
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.dongMot}>
          <Text style={styles.textKetQua}>432</Text>
        </View>
        <View style={styles.dongHaiToSau}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>±</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonToanTu}
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => console.log()}>
            <Text style={styles.textTrang}>÷</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.dongHaiToSau}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonToanTu}
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => console.log()}>
            <Text style={styles.textTrang}>x</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.dongHaiToSau}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonToanTu}
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => console.log()}>
            <Text style={styles.textTrang}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.dongHaiToSau}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonToanTu}
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => console.log()}>
            <Text style={styles.textTrang}>+</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.dongHaiToSau}>
          <TouchableHighlight
            style={styles.button0}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.8}
            underlayColor="white"
            onPress={() => console.log()}>
            <Text style={styles.textDen}>.</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonToanTu}
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => console.log()}>
            <Text style={styles.textTrang}>=</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const TEXT = {
  fontSize: 35,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dongMot: {
    width: '100%',
    height: '100%',
    backgroundColor: '#45434a',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1.5,
  },
  dongHaiToSau: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dadfe8',
    borderWidth: 1,
    borderColor: '#ebeef2',
  },
  button0: {
    flex: 2.02,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dadfe8',
    borderWidth: 1,
    borderColor: '#ebeef2',
  },
  buttonToanTu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f58e33',
    borderWidth: 1,
    borderColor: '#ebeef2',
  },
  textDen: {
    ...TEXT,
  },
  textTrang: {
    ...TEXT,
    color: 'white',
  },
  textKetQua: {
    fontSize: 60,
    color: 'white',
    marginBottom: 10,
    marginRight: 20,
  },
});

export default App;
