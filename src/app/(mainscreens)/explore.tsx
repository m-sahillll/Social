import { useState } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "../(CustomComponents)/BSProfile";
import SearchBox from "../(CustomComponents)/(Explore)/SearchBox";
import { imageUrls } from "@/src/utils/Feed";



const renderItem = ({ item }: { item: string }) => (
  <Image source={{ uri: item }} style={styles.image} />
);

export default function Cart() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <SearchBox />

      <FlatList
       style={{marginTop:10}}
        data={imageUrls}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BottomSheetText: {
    marginTop: 20,
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },

  gridContainer: {
    padding: 5,
  },
  image: {
    width: "33.33%",
    aspectRatio: 1,
    margin: 1,
  },
});
