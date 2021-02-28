import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  
  const Click = () =>{
    Alert.alert("HAHAHA ĐỒ NGỐC!")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={Click}>
        <Text style={styles.text}>Please Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    backgroundColor: '#f59738',
    borderColor: '#40d64f',
    borderWidth: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
