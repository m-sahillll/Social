import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import InputBox from "@/components/InputBox";
import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import CustomButton2 from "@/components/CustomButton2";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        locations={[0.1, 1]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.2 }}
        colors={["#fef4f5", "#edf6ff"]}
        style={style.background}
      />

      <Image
        style={style.InstaIcon}
        source={require("../../assets/images/instagram.png")}
      />
      <InputBox placeholder={"Username, email or mobile number"} />
      <InputBox placeholder={"Password"} secureTextEntry />
      <CustomButton
        onPress={() => console.log("Button Pressed")}
        style={{ marginTop: 20 }}
        buttonTitle={"Login"}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("(screens)/ForgotPassword")}
        style={{ alignSelf: "center" }}
      >
        <Text style={style.ForgotP}>Forgot password?</Text>
      </TouchableOpacity>
       <CustomButton2 
       style={{marginTop:250}}
       buttonTitle={"Create new account"}
       onPress={() => {navigation.navigate("(screens)/SignUpNumber")}}/>
       <Image 
       style={{height:50,width:80,alignSelf:'center'}}
       source={require("../../assets/images/meta2.png")}/>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  InstaIcon: {
    width: 70,
    height: 70,
    marginTop: 150,
    alignSelf: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },

  ForgotP: {
    fontWeight: 600,
    marginTop: 20,
  },
});
