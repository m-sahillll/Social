import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AppColor } from "@/utils/AppColor";

const CustomButton = ({buttonTitle,onPress,style:customStyle}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={onPress}>
        <View style={[style.container,customStyle]}>
            <Text style={style.LoginText} >{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  container: {
    backgroundColor: AppColor.BUTTON,
    height:50,
    width:350,
    borderRadius:37,
    alignSelf:'center',
    
  },

  LoginText :{
    fontWeight:600,
   color : 'white',
   fontSize: 15,
   textAlign:'center',
   paddingVertical:16,
   
  }
});
