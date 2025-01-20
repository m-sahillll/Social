import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
          // backgroundColor:"red",
        }}
      >
        <View>
          <Image
            style={{ height: 37, width: 133 }}
            source={require("../src/assets/images/InstaWord2.png")}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <Image
              style={{ height: 25, width: 29 }}
              source={require("../src/assets/images/like.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ position: "relative" }}>
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../src/assets/images/dm.png")}
              />
              <View style={{ position: "absolute", left: 13, bottom: 13 }}>
                <Text style={style.DmNumber}>6</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const style = StyleSheet.create({
  DmNumber: {
    backgroundColor: "red",
    fontSize: 17,
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 6,
    fontWeight: "800",
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});
