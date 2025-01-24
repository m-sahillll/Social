import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import 'react-native-reanimated';


export const DownloadPicture = ({onClose}:
 { onClose: () => void;}  
) => {
    

  const bottomSheetRef = useRef<BottomSheet>(null);

  
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

 
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        index={1}
        onChange={handleSheetChanges}
        snapPoints={["99%"]}
        enablePanDownToClose
  
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Image 
          style={{height:100,width:100}}
          source={require("../../assets/images/instagram.png")}/>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

