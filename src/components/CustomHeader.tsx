import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Typography } from "../constants/Typography";

export default function CustomHeader({ route, options }) {

    let title = options.title;
    const routeName = route.name;

    if(routeName === "home"){
        title = `Welcome Shlok`
    } else if (routeName === "cart"){
        title = "Your Cart"
    } else {
        title = "Your Profile"
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: Colors.light.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    title: {
        fontSize: Typography.size.l,
        fontWeight: Typography.weight.bold
    }
})
