import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAuthStore } from "../auth/authStore";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const restoreSession = useAuthStore((state) => state.restoreSession); 

  useEffect(() => {
    restoreSession();
  }, [])

  useEffect(() => {
    if(!isLoading){
      SplashScreen.hideAsync();
    }
  }, [isLoading])

  if(isLoading){
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack>

        {/* if guard is true, then this screen can be accesses */}
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(public)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack.Protected>

      </Stack>
    </SafeAreaProvider>
  )
}
