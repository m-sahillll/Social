import { Stack } from "expo-router";

export default function StoryLayout() {
  return (
    <Stack initialRouteName="StoryView">
      <Stack.Screen name="StoryView" options={{ headerShown: false }} />
      <Stack.Screen name="Stories" options={{ headerShown: false }} />
    </Stack>
  );
}
