import { StyleSheet, Text, View } from "react-native";

export default function otpVerifyScreen() {

  return (
    <View style={styles.container}>
      <Text>This is OTP verify page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})