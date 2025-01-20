import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import InputBox from "@/src/CustomComponents/InputBox";
import CustomButton from "@/src/CustomComponents/CustomButton";
import CustomButton2 from "@/src/CustomComponents/CustomButton2";
import { AppColor } from "@/src/utils/AppColor";
import { useNavigation } from "@react-navigation/native";

const SignUpEmail = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <LinearGradient
        locations={[0.1, 1]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.2 }}
        colors={["#fef4f5", "#edf6ff"]}
        style={style.background}
      />
      <Text style={style.MobNo}>What's your email ?</Text>
      <Text style={style.text}>
        Enter the mobile number where you can be contacted. No one will see this
        on your profile.
      </Text>
      <InputBox keyboardType="email-address" placeholder="Email" />

      <CustomButton
        onPress={() => console.info("Button Pressed")}
        style={{ marginTop: 20 }}
        buttonTitle={"Next"}
      />
      <CustomButton2
        onPress={() => navigation.navigate("SignUpNumber")}
        style={{ marginTop: 20 }}
        buttonTitle={"Sign up with mobile number"}
      />
      <View style={{ marginTop: 370 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ alignSelf: "center" }}
        >
          <Text style={style.HaveAcc}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpEmail;

const style = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  MobNo: {
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 23,
  },
  text: {
    marginTop: 15,
    opacity: 0.9,
  },

  text2: {
    marginTop: 10,
    opacity: 0.6,
    fontSize: 12,
  },

  HaveAcc: {
    fontWeight: 600,
    color: AppColor.BUTTON,
  },
});
