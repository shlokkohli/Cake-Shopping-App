import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from '@/constants/Images'
import { Typography } from "@/constants/Typography";

export default function MobileLogin() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* headers */}
                <View>
                    <Image
                        source={Images.heart.redHeartImage}
                        style={styles.logo}
                    />
                    <Text style={styles.heading}>
                        Nice to see you!
                    </Text>
                    <Text>
                        Enter your mobile number to sign in or create an account
                    </Text>
                </View>
        
                {/* input section */}
        
                {/* terms and conditions */}
        
                {/* button */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  logo: {
    height: 50,
    width: 60,
  },
  heading: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold
  }
})