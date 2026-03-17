import { Image, ImageSourcePropType, LayoutAnimation, Platform, Pressable, StyleSheet, Text, UIManager, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Typography } from "../constants/Typography";
import { useState } from "react";

interface ICakeCard {
    title: string,
    imagePath: ImageSourcePropType,
    description: string
}

if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CakeCard({ title, imagePath, description }: ICakeCard) {
    
    const [quantity, setQuantity] = useState<number>(0);

    const animate = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }
    
    const increaseQuatity = () => {
        animate();
        setQuantity(prev => prev+ 1);
    }
    
    const decreaseQuantity = () => {
        animate();
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    }

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

                <View style={styles.buttonWrapper}>
                    {quantity === 0 ? (
                        <Pressable
                            style={styles.addToCartButton}
                            onPress={increaseQuatity}
                        >
                            <Text style={styles.addToCartText}>
                                Add to cart
                            </Text>
                        </Pressable>
                    ): (
                        <View style={styles.quantityControls}>
                            <Pressable
                                onPress={decreaseQuantity}
                                style={styles.stepButton}
                            >
                                <Text
                                    style={styles.stepButtonText}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Text
                                style={styles.quantityText}
                            >
                                {quantity}
                            </Text>

                            <Pressable
                                onPress={increaseQuatity}
                                style={styles.stepButton}
                            >
                                <Text
                                    style={styles.stepButtonText}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </View>
                    )}
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDFBF7",
        padding: 10,
        borderRadius: 15,
        width: 190,
        borderWidth: 1,
        borderColor: '#E5E7EB',
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
    },
    buttonWrapper: {
        marginTop: 10,
    },
    addToCartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.primary,
        borderRadius: 8,
        height: 36
    },
    addToCartText: {
        fontSize: Typography.size.s,
        fontWeight: Typography.weight.medium
    },
    quantityControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.light.primary,
        height: 36,
    },
    stepButton: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepButtonText: {
        fontSize: Typography.size.l,
        fontWeight: Typography.weight.regular
    },
    quantityText: {
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.medium
    },
})
