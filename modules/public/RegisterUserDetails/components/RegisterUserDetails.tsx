import { Colors } from "@/constants/Colors";
import { Typography } from "@/constants/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterUserDetails() {

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();

    const [error, setError] = useState<string>();

    const router = useRouter();

    const handleContinue = () => {
        if(!firstName || !lastName){
            setError('Both fields are mandatory!');
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
            style={styles.innerContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            {/* back button */}

            {/* name section */}
            <View style={styles.nameSection}>

                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                <Ionicons name="arrow-back" size={24} color={Colors.light.textPrimary} />
                </Pressable>

                <View style={styles.headingSection}>
                    <Text style={styles.heading}>
                        What should we call you?
                    </Text>
                    <Text style={styles.description}>
                        Enter your name to start ordering your favorites.
                    </Text>
                </View>

                <View style={styles.inputSection}>
                    <Text style={styles.nameHeading}>
                        Enter Name
                    </Text>

                    <View style={styles.inputBoxView}>
                        <TextInput
                            keyboardType="default"
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First Name"
                            style={styles.inputBox}
                        />

                        <TextInput
                            keyboardType="default"
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name"
                            style={styles.inputBox}
                        />
                    </View>
                    {error && (
                        <Text style={styles.errorText}>{error}</Text>
                    )}
                </View>
            </View>

            {/* continue button */}
            <Pressable
                onPress={handleContinue}
                disabled={!firstName || !lastName}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: !firstName || !lastName ? Colors.light.primaryDisabled : pressed ? Colors.light.primaryPressed : Colors.light.primary
                    }
                ]}
            >
                <Text style={[
                    styles.buttonText,
                    (!firstName || !lastName) && { color: Colors.light.textSecondary}
                ]}>
                    Continue
                </Text>
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
    justifyContent: 'space-between',
    width: '100%',
    padding: 30
  },
  backButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameSection: {
    gap: 25
  },
  headingSection: {
    gap: 8
  },
  heading: {
    color: Colors.light.textPrimary,
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold
  },
  description: {
    color: Colors.light.textSecondary,
    fontSize: Typography.size.s,
    fontWeight: Typography.weight.regular
  },
  nameHeading: {
    color: Colors.light.textPrimary,
    fontSize: Typography.size.m,
    fontWeight: Typography.weight.medium
  },
  inputBoxView: {
    gap: 25
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.light.textSecondary,
    borderRadius: 10,
    padding: 10,
    color: Colors.light.textPrimary,
    fontSize: Typography.size.m,
    fontWeight: Typography.weight.regular
  },
  inputSection: {
    gap: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.primary,
    height: 50,
    borderRadius: 10
  },
  buttonText: {
    color: Colors.light.textPrimary,
    fontSize: Typography.size.m,
    fontWeight: Typography.weight.regular
  },
  errorText: {
    fontSize: Typography.size.s,
    color: Colors.light.textError,
    textAlign: 'left'
  }
})