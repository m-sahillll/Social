import { View, Text, TouchableOpacity, StyleSheet, Image,TextInput } from "react-native";
import React from "react";

const SearchBox = () => {
  return (
    <View>
      <TextInput 
      placeholder="Search"
      style={style.SearchButton}/>
    
    </View>
  );
};

export default SearchBox;

const style = StyleSheet.create({
  SearchButton: {
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "center",
    height: 35,
    width: 350,
    backgroundColor: "rgba(37, 150, 190,0.1)",
  },

  Image:{
    height: 15, width: 15, opacity: 0.7
  }
});
