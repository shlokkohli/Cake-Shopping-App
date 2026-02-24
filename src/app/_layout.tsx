import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack>

        {/* if guard is true, then this screen can be accesses */}
        <Stack.Protected guard={false}>
          <Stack.Screen name="(public)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={true}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack.Protected>

      </Stack>
    </SafeAreaProvider>
  )
}