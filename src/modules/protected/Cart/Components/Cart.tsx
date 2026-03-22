import CartItem from "@/src/components/Protected/CartItem";
import { Colors } from "@/src/constants/Colors";
import { Typography } from "@/src/constants/Typography";
import { cartitems } from "@/src/data/CartItems";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Cart() {

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={() => (
                <View>
                    <Text style={styles.yourCartTitle}>
                        Your Cart
                    </Text>
                    <Text style={styles.yourCartDescription}>
                        Review before placing order
                    </Text>
                </View>
            )}

            data={cartitems}
            renderItem={({ item }) => (
                <CartItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imagePath={item.image}
                />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}

        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    yourCartTitle: {
        fontSize: Typography.size.xl,
        fontWeight: Typography.weight.bold,
        color: Colors.light.textPrimary
    },
    yourCartDescription: {
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.regular,
        color: Colors.light.textSecondary
    },
    separator: {
        height: 1,
        color: "gray",
    }
})