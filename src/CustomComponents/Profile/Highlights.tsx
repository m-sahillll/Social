import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { UserData } from "@/src/utils/UserData";
import { useNavigation } from "@react-navigation/native";


const Highlights = () => {
  const Navigation = useNavigation<any>();
  return (
    <View style={{ flexDirection: "row", marginTop: 15,marginLeft:-16 }}>
      {UserData.map((item) => {
        console.log(item);
        return (
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity
             onPress={()=> Navigation.navigate("StoryView")}
            >
              <View
                style={{
                  borderWidth: 3,
                  borderRadius: 40,
                  padding: 3,
                  borderColor: 'rgba(128,128,128,0.2)',
                }}
              >
                <Image
                  style={{ height: 70, width: 70, borderRadius: 35 }}
                  source={item.story.image}
                />
              </View>
              <Text style={{ alignSelf: "center" }}>{item.username}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Highlights;
