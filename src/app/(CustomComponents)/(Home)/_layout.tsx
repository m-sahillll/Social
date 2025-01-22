import { Stack } from "expo-router";
import SignUpEmail from "@/src/app/(auth)/SignUpEmail";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="StoryView" options={{ headerShown: false }} />
      <Stack.Screen name="Stories" options={{ headerShown: false }} />
    </Stack>
  );
}
