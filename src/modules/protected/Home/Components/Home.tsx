import CategoriesCard from "@/src/components/CategoriesCard";
import { Colors } from "@/src/constants/Colors";
import { Typography } from "@/src/constants/Typography";
import { categories } from "@/src/data/Categories";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {

    return (
        <View style={styles.container}>

            <View style={styles.headerView}>
                <Text style={styles.title}>
                    Sweet Cravings?
                </Text>
                <Text style={styles.categoryDescription}>
                    Choose a cateogry to get started
                </Text>
            </View>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={( eachItem) => (
                    <CategoriesCard
                        title={eachItem.item.title}
                        imagePath={eachItem.item.image}
                    />
                )}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                contentContainerStyle={styles.flatListStyle}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerView: {
        marginTop: 15,
        gap: 5
    },
    title: {
        fontSize: Typography.size.xl,
        fontWeight: Typography.weight.bold,
        color: Colors.light.textPrimary
    },
    categoryDescription: {
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.regular,
        color: Colors.light.textSecondary
    },
    flatListStyle: {
        marginTop: 20,
    }
})
