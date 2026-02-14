import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterUserDetails() {

    const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
            style={styles.innerContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            {/* back button */}
            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
            >
            <Ionicons name="arrow-back" size={24} color={Colors.light.textPrimary} />
            </Pressable>

            

        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  backButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },

})