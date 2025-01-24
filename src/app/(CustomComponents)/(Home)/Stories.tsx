import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { UserData } from "@/src/utils/UserData";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      {UserData.map((item) => {
        return (
          <View key={item.id.toString} style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("(CustomComponents)", {
                  screen: "(Home)",
                  params: {
                    screen: "StoryView",
                  },
                });
              }}
            >
              <View style={styles.storyContainer}>
                <Image source={item.profile} style={styles.storyImage} />
              </View>
              <Text style={styles.storyText}>{item.username}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    borderColor: "red",
    alignItems: "center",
  },
  storyImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  storyText: {
    alignSelf:'center',
    marginTop: 5,
    fontSize: 12,
  },
});
