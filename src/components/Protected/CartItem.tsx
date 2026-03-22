import { ImageSourcePropType, Text, View } from "react-native";

interface CartItemProps {
    title: string,
    price: string,
    imagePath: ImageSourcePropType
}

export default function CartItem ({ title, price, imagePath }: CartItemProps) {
    return(
        <View>
            <Text>
                Cart item
            </Text>
        </View>
    )
}