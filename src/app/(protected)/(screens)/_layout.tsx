import { Stack } from "expo-router";

export default function ScreensLayout() {
    return (
        <Stack>
            <Stack.Screen name="register-user-details" options={{ headerShown: false }} />
        </Stack>
    )
}