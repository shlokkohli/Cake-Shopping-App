import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Typography } from "../../constants/Typography";

interface CategoriesCardProps {
  title: string;
  imagePath: ImageSourcePropType;
}

export default function CategoriesCard({
  title,
  imagePath,
}: CategoriesCardProps) {
  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.imageStyle} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
    marginBottom: 20,
    backgroundColor: Colors.light.primaryDisabled,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 10,
  },
  imageStyle: {
    height: 100,
    width: 120,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: Typography.weight.medium,
  },
});
