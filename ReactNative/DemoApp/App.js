import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
// view is equivalent to div section 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"Hello instead " 
      </Text>
      <View>
      <Text>Another piece of text</Text>
      </View>
      <Button title="Tap me daddy"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
