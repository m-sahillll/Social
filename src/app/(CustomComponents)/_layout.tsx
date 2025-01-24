import { Stack } from "expo-router";

export default function CustomComponentsLayout() {
  return (
    <Stack initialRouteName="(Home)">
      <Stack.Screen name="(Home)" options={{ headerShown: false }} />
      <Stack.Screen name="(Profile)" options={{ headerShown: false }} />
      <Stack.Screen name="BSProfile" />
      <Stack.Screen name="CustomButton" />
      <Stack.Screen name="CustomButton2" />
      <Stack.Screen name="InputBox" />
      <Stack.Screen name="HighlightsView" options={{ headerShown: false }} />
    </Stack>
  );
}
