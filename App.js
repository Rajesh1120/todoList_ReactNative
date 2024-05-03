import React from 'react';
import {  StyleSheet, View,Text,  ScrollView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    
      
      <View style={styles.inner}>
        <Text style={{
          display:"flex",
          fontSize:32,
          fontWeight:900,
          color:"blue"
        }}
        >--Daily Tasks--</Text>
        <TodoScreen />
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    marginVertical:40,
  }

});
