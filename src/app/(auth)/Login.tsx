import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import InputBox from "@/src/CustomComponents/InputBox";
import CustomButton from "@/src/CustomComponents/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton2 from "@/src/CustomComponents/CustomButton2";
import { useNavigation } from "@react-navigation/native";

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
        onPress={() =>
          navigation.navigate("(mainscreens)", {
            screen: "home",
          })
        }
        style={{ marginTop: 20 }}
        buttonTitle={"Login"}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={{ alignSelf: "center" }}
      >
        <Text style={style.ForgotP}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 220 }}>
        <CustomButton2
          style={{}}
          buttonTitle={"Create new account"}
          onPress={() => {
           navigation.navigate("SignUpNumber")
          }}
        />
      </View>
      <Image
        style={{ height: 50, width: 80, alignSelf: "center" }}
        source={require("../../assets/images/meta2.png")}
      />
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
