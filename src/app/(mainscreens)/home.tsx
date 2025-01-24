import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Stories from "../(CustomComponents)/(Home)/Stories";
import Post from "../(CustomComponents)/(Home)/Post";

const home = () => {
  return (
    <View>
      <Header />
      <Stories />
      < Post />
    </View>
  );
};

export default home;
