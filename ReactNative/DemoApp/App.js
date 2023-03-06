import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// view is equivalent to div section 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"Hello instead " 
      </Text>
      <View>
      <Text style={{margin:16,borderWidth: 2, borderColor:"red",padding:16 }}>Another piece of text</Text>
      </View>
      <Button title="Tap me"/>
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
