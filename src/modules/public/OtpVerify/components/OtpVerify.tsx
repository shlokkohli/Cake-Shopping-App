import { Colors } from "@/src/constants/Colors";
import { Typography } from "@/src/constants/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpVerify() {
  const router = useRouter();
  const [timer, setTimer] = useState<number>(30);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpResend = () => {
    setTimer(30);
  };

  const handleOtpSubmit = (otp: string) => {
    router.push("/register-user-details");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* back button */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={Colors.light.textPrimary}
          />
        </Pressable>

        <View style={styles.textSection}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.heading}>Verify account with OTP</Text>
            <Text style={styles.description}>
              We've sent a 4 digit code to your mobile
            </Text>
          </View>

          {/* input box */}
          <View style={styles.otpInputBox}>
            <OtpInput
              numberOfDigits={4}
              focusColor="black"
              type="numeric"
              onFilled={(text) => handleOtpSubmit(text)}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>

          {/* otp not received */}
          <View style={styles.resendOtpSection}>
            <Text style={styles.otpErrorDescription}>Didn't get a code?</Text>

            <Pressable disabled={timer > 0} onPress={handleOtpResend}>
              <Text
                style={[
                  styles.resendText,
                  {
                    color:
                      timer > 0
                        ? Colors.light.textSecondary
                        : Colors.light.textPrimary,
                  },
                ]}
              >
                {timer > 0 ? `Resend code in ${timer}s` : "Request a new code"}
              </Text>
            </Pressable>
          </View>
        </View>
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
    justifyContent: "flex-start",
    width: "100%",
    padding: 30,
  },
  backButton: {
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    justifyContent: "center",
    marginTop: 30,
    gap: 30,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  heading: {
    fontSize: 30,
    fontWeight: Typography.weight.medium,
    color: Colors.light.textPrimary,
  },
  description: {
    fontSize: Typography.size.s,
    fontWeight: Typography.weight.regular,
    color: Colors.light.textSecondary,
  },
  otpInputBox: {
    width: "70%",
    alignSelf: "center",
  },
  resendOtpSection: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  otpErrorDescription: {
    color: Colors.light.textSecondary,
    fontSize: Typography.size.s,
  },
  resendText: {
    fontSize: Typography.size.s,
  },
  errorText: {
    fontSize: Typography.size.s,
    color: Colors.light.textError,
    textAlign: "center",
  },
});
