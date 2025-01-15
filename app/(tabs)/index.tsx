import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      navigation.navigate("(screens)", {
        screen: "Login",
      })
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          style={styles.splashImage}
          source={require('../../assets/images/instagram.png')}
        />
        <Text style={styles.splashText}>Welcome to Instagram</Text>
        
      </View>
    );
  }

  return null;
};

export default IndexScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashImage: {
  
    width: 70,
    height: 70,
  },
  splashText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});