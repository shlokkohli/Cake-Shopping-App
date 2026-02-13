import { Stack } from "expo-router";

export default function PublicLayout() {
    return (
        <Stack>
            <Stack.Screen name="mobile-login" options={{ headerShown: false }} />
            <Stack.Screen name="otp-verify" options={{ headerShown: false }} />
            <Stack.Screen name="register-user-details" options={{ headerShown: false }} />
        </Stack>
    )
}