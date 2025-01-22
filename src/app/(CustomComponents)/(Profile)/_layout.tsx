import { Stack } from "expo-router";



export default function RootLayout() {
  
  return (
  
      <Stack>
        <Stack.Screen name="Highlights"  />
        <Stack.Screen name="HighlightsView"  />
        <Stack.Screen name="MentionScreen"  />
        <Stack.Screen name="PostScreen"  />
        <Stack.Screen name="ProfileDetails"  />
        <Stack.Screen name="ProfileHeader"  />
      </Stack>
    
  
  );
}
