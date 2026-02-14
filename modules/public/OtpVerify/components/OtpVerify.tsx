import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpVerify() {

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.innerContainer}>
            <Text>This is OTP verify page</Text>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 30
  }
})