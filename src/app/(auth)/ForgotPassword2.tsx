import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AppColor } from "@/src/utils/AppColor";
import InputBox from "../(CustomComponents)/InputBox";
import CustomButton from "../(CustomComponents)/CustomButton";
import CustomButton2 from "../(CustomComponents)/CustomButton2";
import { Linking } from "react-native";
import { useNavigation } from "expo-router";

const ForgotPassword2 = () => {
  const navigation = useNavigation();

  const openInstagramHelpCenter = () => {
    Linking.openURL("https://help.instagram.com/");
  };
  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/");
  };
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <LinearGradient
        locations={[0.1, 1]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.2 }}
        colors={["#fef4f5", "#edf6ff"]}
        style={style.background}
      />
      <Text style={style.MobNo}>Find your account</Text>
      <Text style={style.text}>Enter your mobile number</Text>
      <TouchableOpacity onPress={openInstagramHelpCenter}>
        <Text
          style={{ color: AppColor.BUTTON, marginTop: 10, fontWeight: "bold" }}
        >
          Can't reset your password?
        </Text>
      </TouchableOpacity>
      <InputBox keyboardType="phone-pad" placeholder="Mobile number" />
      <Text style={{ marginTop: 10, opacity: 0.6 }}>
        You may recieve WhatsApp and SMS notifications from us for security and
        login purposes.
      </Text>
      <CustomButton
        style={{ marginTop: 20 }}
        onPress={() => console.info("Button Pressed")}
        buttonTitle={"Continue"}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>Search by email instead</Text>
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", marginTop: 40 }}>
        -------------------------OR------------------------
      </Text>
      <CustomButton2
        style={{ marginTop: 20 }}
        onPress={openFacebook}
        buttonTitle={"Log in with Facebook"}
      />
    </View>
  );
};

export default ForgotPassword2;

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
});
