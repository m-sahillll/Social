import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

interface InputBoxProps {
  placeholder: string;
 

  secureTextEntry?: boolean;
  keyboardType?: string;
  maxLength?: number;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  
  style:customStyle,
  secureTextEntry,
  keyboardType,
  maxLength,
}) => {
  return (
    <View style={[styles.container,customStyle]}>
      <TextInput
        style={styles.textinput}
        placeholder={placeholder}
       
       
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(71, 71, 71, 0.2)",
    borderWidth: 1,
    borderRadius: 17,
    backgroundColor: "white",
    alignSelf:'center',
    marginTop:20,
  },
  textinput: {
    fontWeight:800,
    height: 60,
   
    width: 350,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default InputBox;
