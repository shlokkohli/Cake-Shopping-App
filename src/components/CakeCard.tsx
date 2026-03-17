import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Typography } from "../constants/Typography";
import { useState } from "react";

interface ICakeCard {
    title: string,
    imagePath: ImageSourcePropType,
    description: string
}

export default function CakeCard({ title, imagePath, description }: ICakeCard) {

    const [quantity, setQuantity] = useState<number>(0)

    const increaseQuatity = () => setQuantity(prev => prev+ 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0))

    return (
        <View style={styles.container}>
            <Image source={imagePath} style={styles.imageStyle} />

            <View style={styles.cardDetails}>
                {/* title + price row */}
                <View style={styles.topRow}>
                    <Text style={styles.titleArea}>
                        {title}
                    </Text>

                    <Text style={styles.priceStyle}>
                        $100
                    </Text>
                </View>

                {/* description */}
                <Text style={styles.descriptionStyle} numberOfLines={2}>
                    {description}
                </Text>

                <View>
                    {quantity === 0 ? (
                        <Pressable>
                            Add to cart
                        </Pressable>
                    ): (
                        <Text>Hello</Text>
                        // <View>
                        //     <Pressable>

                        //     </Pressable>

                        //     <Text>

                        //     </Text>

                        //     <Pressable>

                        //     </Pressable>
                        // </View>
                    )}
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.primaryDisabled,
        padding: 10,
        borderRadius: 15,
        width: 190
    },
    imageStyle: {
        height: 180,
        width: 170,
        borderRadius: 15
    },
    cardDetails: {
        gap: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    titleArea: {
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.medium,
        maxWidth: 120,
        flex: 1
    },
    priceStyle: {
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.bold,
    },
    descriptionStyle: {
        fontSize: Typography.size.xs,
        fontWeight: Typography.weight.regular,
        color: Colors.light.textSecondary,
        flex: 1,
    }
})
