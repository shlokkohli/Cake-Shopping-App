import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from '@/constants/Images'
import { Typography } from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function MobileLogin() {

    const [mobileNumber, setMobileNumber] = useState<string>('');
    const isValid = mobileNumber.length === 10;
    const router = useRouter();

    const handleContinue = () => {
        if(isValid){
            router.push('/otp-verify')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.innerContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/* headers */}
                <View style={styles.header}>

                    <View style={styles.innerHeader}>

                        <View>
                            <Image
                                source={Images.heart.redHeartImage}
                                style={styles.heartLogo}
                            />
                            <Text style={styles.heading}>
                                Nice to see you!
                            </Text>
                        </View>

                        <Text style={styles.description}>
                            Welcome to Cakes&More, enter your mobile number to get started
                        </Text>
                    </View>


                    {/* input section */}
                    <View style={styles.inputSection}>
                        <Text style={styles.mobileInputLabel}>
                            Mobile Number
                        </Text>
                        <TextInput
                            style={styles.mobileInputBox}
                            keyboardType="phone-pad"
                            maxLength={10}
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                        />
                    </View>
            
                    {/* terms and conditions */}
                    <Text style={styles.termsConatiner}>
                        Your mobile number is safe with us. We only use it for authentication.
                    </Text>
                </View>
        
        
                {/* button */}
                <Pressable
                    disabled={!isValid}
                    onPress={handleContinue}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: !isValid ? Colors.light.primaryDisabled : (pressed ? Colors.light.primaryPressed : Colors.light.primary)
                        }
                    ]}
                >
                    <Text style={[
                        styles.buttonText,
                        (!isValid && { color: Colors.light.textSecondary })
                    ]}>
                        Continue
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    gap: 30,
    width: '100%',
    justifyContent: 'space-between',
    padding: 30,
  },
  innerHeader: {
    gap: 12,
  },
  header: {
    gap: 20,
  },
  heartLogo: {
    height: 50,
    width: 60,
  },
  heading: {
    color: Colors.light.textPrimary,
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold,
  },
  description: {
    color: Colors.light.textSecondary,
    fontSize: Typography.size.m,
    fontWeight: Typography.weight.regular
  },
  inputSection: {
    gap: 8
  },
  mobileInputLabel: {
    color: Colors.light.textPrimary,
    fontSize: Typography.size.m,
    fontWeight: Typography.weight.medium
  },
  mobileInputBox: {
    borderWidth: 1,
    borderColor: Colors.light.textSecondary,
    borderRadius: 10,
    height: 50,
    fontSize: Typography.size.l,
    fontWeight: Typography.weight.regular,
    paddingHorizontal: 16,
    color: Colors.light.textPrimary
  },
  termsConatiner: {
    color: Colors.light.textSecondary,
    fontSize: Typography.size.s,
    fontWeight: Typography.weight.regular
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
})