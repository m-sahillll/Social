import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { UserData } from "@/src/utils/UserData";

const Post = () => {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      {UserData.map((item) => {
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                marginBottom: 8,
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 30, width: 30, borderRadius: 15 }}
                source={item.profile}
              />
              <Text
                style={{ paddingLeft: 10, fontSize: 16, fontWeight: "600" }}
              >
                {item.name}
              </Text>
            </View>
            <View>
              <Image
                style={{ height: 400, width: "100%" }}
                source={item.post.image}
              />
            </View>
            <View
              style={{
                height: 30,
                width: "100%",
               // backgroundColor: "red",
                paddingVertical: 4,
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{ height: 20, width: 22, marginLeft: 10 }}
                  source={require("../../../assets/images/like2.png")}
                />
              </TouchableOpacity>
              <Text style={style.Text}>{item.post.like}</Text>
              <TouchableOpacity>
                <Image
                  style={{ height: 20, width: 20, marginLeft: 10 }}
                  source={require("../../../assets/images/Comment.png")}
                />
              </TouchableOpacity>
              <Text style={style.Text}>{item.post.comment}</Text>
              <TouchableOpacity>
                <Image
                  style={{ height: 20, width: 20, marginLeft: 10 }}
                  source={require("../../../assets/images/Share.png")}
                />
              </TouchableOpacity>
              <Text style={style.Text}>{item.post.share}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: 10, fontWeight: "700" }}>
                {item.username}
              </Text>
              <Text style={{ marginLeft: 5 }}>{item.post.caption}</Text>
            </View>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                opacity: 0.6,
                marginBottom: 10,
              }}
            >
              {item.post.date}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Post;

const style = StyleSheet.create({
  Text: {
    alignSelf: "center",
    marginLeft: 8,
    paddingVertical: 3,
  },
});
