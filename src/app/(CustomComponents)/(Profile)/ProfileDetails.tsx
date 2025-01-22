import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { UserData } from "@/src/utils/UserData";
import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";

const ProfileDetails = () => {
  return (
    <View>
      {UserData.map((item) => {
        if (item.id === 1) {
          return (
            <View style={style.ProfileMainView}>
                <TouchableOpacity >
             
                <Image style={style.ProfilePic} source={item.profile} />
                
                <View>
                  <View
                    style={style.PlusButton}>
                    <Text style={{color:"white",fontSize: 15,fontWeight: "bold",}}>
                      +
                    </Text>
                 
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ marginHorizontal: 15 }}>
                <Text style={style.Name}>{item.name}</Text>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                  <View style={{}}>
                    <Text>7</Text>
                    <Text>posts</Text>
                  </View>
                  <View style={{ marginLeft: 25 }}>
                    <Text>12M</Text>
                    <Text>followers</Text>
                  </View>
                  <View style={{ marginLeft: 25 }}>
                    <Text>370</Text>
                    <Text>following</Text>
                  </View>
                </View>
              </View>
             
            
            </View>
            
          );
        }
        return null;
      })}
      
    </View>
    
  );
};

export default ProfileDetails;

const style = StyleSheet.create({
  ProfilePic: {
    position: "relative",
    marginLeft: 20,
    height: 80,
    width: 80,
    borderRadius: 50,
  },

  ProfileMainView: {
    flexDirection: "row",
    //backgroundColor: "red",
    marginTop: 30,
  },

  Name: {
    marginTop: 6,
    fontSize: 18,
  },

  PlusButton :{
    position: "absolute",
    right: 4,
    bottom: 2,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
  }
});
