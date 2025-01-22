import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Stories from "../(CustomComponents)/(Home)/Stories";

const home = () => {
  return (
    <View>
      <Header />
      <Stories />
    </View>
  );
};

export default home;
