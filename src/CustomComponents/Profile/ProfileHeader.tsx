import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Linking } from "react-native";
import { UserData } from "@/src/utils/UserData";
import { DownloadPicture } from "../BSProfile";

const ProfileHeader = () => {
  const [pictureOpen, setPictureOpen] = useState(false);

  const openThreads = () => {
    Linking.openURL("https://play.google.com/store/apps/details?id=com.instagram.barcelona");};

  return (
    <SafeAreaView>
      <View style={style.HeaderView}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../../assets/images/Lock.png")} />

          {UserData.map((item) => {
            
            return (
              <TouchableOpacity style={{ marginTop: 12, alignSelf: "center" }}>
                <Text style={style.UsernameText}>
                  {item.id == 1 ? item.username : ""}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ flexDirection: "row", marginTop: -3 }}>
          <TouchableOpacity onPress={openThreads}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/images/Threads.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            onPress={() => setPictureOpen(true)}
          >
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/images/PlusIcon.png")}
            />
          </TouchableOpacity>
          {pictureOpen && 
             <DownloadPicture 
             onClose={() => setPictureOpen(false)} />}
             
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/images/SideBar.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const style = StyleSheet.create({
  HeaderView: {
    flexDirection: "row",
    marginTop: 30,
    //backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "space-between",
    height: 50,
  },

  UsernameText: {
    height: 40,
    fontSize: 23,
    fontWeight: "800",
    marginLeft: 3,
  },
});
