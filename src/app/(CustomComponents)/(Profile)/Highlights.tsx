import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { UserData } from "@/src/utils/UserData";
import { useNavigation } from "@react-navigation/native";

const Highlights = () => {
  const Navigation = useNavigation<any>();
  return (
    <View style={{ flexDirection: "row", marginTop: 15, marginLeft: -16 }}>
      {UserData.map((item) => {
        return (
          <View key={item.id} style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => Navigation.navigate("HighlightsView")}>
              <View style={styles.HighlightContainer}>
                <Image
                  style={styles.HighlightImage}
                  source={item.story.image}
                />
              </View>
              <Text style={styles.HighlightText}>{item.username}</Text>
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
