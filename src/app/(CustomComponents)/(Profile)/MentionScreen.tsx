import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MentionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mentions Screen</Text>
    </View>
  );
};

export default MentionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});