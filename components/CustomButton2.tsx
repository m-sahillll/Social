import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AppColor } from "@/utils/AppColor";

const CustomButton2 = ({buttonTitle,onPress,style:customStyle}) => {
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

export default CustomButton2;

const style = StyleSheet.create({
  container: {
    backgroundColor:"transparent",
    height:50,
    width:350,
    borderRadius:37,
    borderWidth:1,
    borderColor: AppColor.BUTTON,
    alignSelf:'center',
    
  },

  LoginText :{
    fontWeight:600,
   color : AppColor.BUTTON,
   fontSize: 15,
   textAlign:'center',
   paddingVertical:16,
   
  }
});
