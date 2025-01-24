import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { MyData } from '@/src/utils/MyData';

const { width } = Dimensions.get('window');
const numColumns = 3;
const imageSize = width / numColumns *1.2;

const PostScreen = () => {

  const postImages = MyData.map(user => user.post.image);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item} style={styles.postImage} />
    </View>
  );

  return (
    <FlatList
     
      data={postImages}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
    />
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 1,
  },
  postImage: {
    width: imageSize,
    height: imageSize,
  },
});