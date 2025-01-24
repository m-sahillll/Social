import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { MyData } from "@/src/utils/MyData";
import { UserData } from "@/src/utils/UserData";
import { useNavigation } from "@react-navigation/native";

const Highlights = () => {
  const Navigation = useNavigation<any>();
  return (
    <View style={{ flexDirection: "row", marginTop: 15, marginLeft: -16 }}>
      {MyData.map((item) => {
        return (
          <View key={item.id} style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() =>  Navigation.navigate("(CustomComponents)", {
                  screen: "(Profile)",
                  params: {
                    screen: "HighlightsView",
                  },
                })}>
              <View style={styles.HighlightContainer}>
                <Image
                  style={styles.HighlightImage}
                  source={item.Highlights?.image}
                />
              </View>
              <Text style={{alignSelf:'center',}}>{item.Highlights.text}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  HighlightContainer: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 3,
    borderColor: "rgba(128,128,128,0.2)",
  },
  HighlightImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  HighlightText: {
    marginTop: 5,
    fontSize: 12,
    alignSelf: "center",
  },
});
