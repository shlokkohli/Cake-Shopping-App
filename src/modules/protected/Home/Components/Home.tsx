import CakeCard from "@/src/components/CakeCard";
import CategoriesCard from "@/src/components/CategoriesCard";
import { Colors } from "@/src/constants/Colors";
import { Typography } from "@/src/constants/Typography";
import { cakecard } from "@/src/data/CakeCard";
import { categories } from "@/src/data/Categories";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {

    return (

        <FlatList
            style={styles.container}
            data={cakecard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListHeaderComponent={() => (

                // categories section
                <View>
                    <View>
                        <Text style={styles.title}>
                            Sweet Cravings?
                        </Text>
                        <Text style={styles.categoryDescription}>
                            Choose a cateogry to get started
                        </Text>
                    </View>

                    <View style={styles.categoriesGrid}>
                        {categories.map((eachItem) => (
                            <View key={eachItem.id}>
                                <CategoriesCard
                                    title={eachItem.title}
                                    imagePath={eachItem.image}
                                />
                            </View>
                        ))}
                    </View>

                    <Text style={styles.exploreSectionTitle}>
                        Explore More
                    </Text>
                </View>

            )}

            renderItem={( eachItem ) => (
                <CakeCard
                    title={eachItem.item.title}
                    imagePath={eachItem.item.image}
                    description={eachItem.item.description}
                />
            )}
            columnWrapperStyle={styles.row} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    categoriesSection: {
        marginTop: 15,
    },
    headerView: {
        gap: 5
    },
    title: {
        fontSize: Typography.size.xl,
        fontWeight: Typography.weight.bold,
        color: Colors.light.textPrimary
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    categoryDescription: {
        fontSize: Typography.size.m,
        fontWeight: Typography.weight.regular,
        color: Colors.light.textSecondary
    },
    exploreSection: {
        flex: 1
    },
    row: {
        justifyContent: 'center',
        gap: 10
    },
    exploreSectionTitle: {
        marginBottom: 15,
        fontSize: Typography.size.xl,
        fontWeight: Typography.weight.bold
    },
})
