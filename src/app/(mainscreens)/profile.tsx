import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProfileDetails from "../(CustomComponents)/(Profile)/ProfileDetails";
import ProfileHeader from "../(CustomComponents)/(Profile)/ProfileHeader";
import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";
import { UserData } from "@/src/utils/UserData";
import CustomButton2 from "../(CustomComponents)/CustomButton2";
import Highlights from "../(CustomComponents)/(Profile)/Highlights";
import ProfileTabs from "../(CustomComponents)/(Profile)/ProfileTabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsScreen from "../(CustomComponents)/(Profile)/PostScreen";
import MentionScreen from "../(CustomComponents)/(Profile)/MentionScreen";

const profile = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{flex:1}}>
      <ProfileHeader />
      <ProfileDetails />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ marginTop: 10 }}>
          Becoming a better version of myself everyday !!
        </Text>
        <View>
          {UserData.map((item) => {
            if (item.id === 1) {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingVertical: 2,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 15, width: 15 }}
                    source={require("../../assets/images/Threads.png")}
                  />
                  <Text
                    style={{ fontWeight: "900", fontSize: 16, marginLeft: 5 }}
                  >
                    {item.username}
                  </Text>
                </View>
              );
            }
            return null;
          })}
          <View style={{ flexDirection: "row" }}>
             <TouchableOpacity style={style.button}>
                  <Text style={{}}>Add profile</Text>
             </TouchableOpacity>

            <TouchableOpacity style={[style.button, { marginLeft: 18 }]}>
                  <Text>Share profile</Text>
            </TouchableOpacity>

            <View style={style.AddingUser}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../assets/images/AddUser.png")}/>
            </View>
          </View>
          < Highlights />
          <ProfileTabs />
                  
        
         
        </View>
      </View>
    </View>
  );
};

export default profile;

const style = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 35,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  AddingUser: {
    height: 35,
    width: 35,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 7,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
