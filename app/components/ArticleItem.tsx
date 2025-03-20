import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Article } from "../../types";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: article.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.date}>
        {new Date(article.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
      <Text numberOfLines={2} style={styles.title}>
        {article.title}
      </Text>
      <Text numberOfLines={4} style={styles.description}>
        {article.short_description}
      </Text>
      {/* Tags */}
      <View style={styles.footer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          {article.tags.map((tag) => (
            <Text key={tag.id} style={styles.tag}>
              {tag.name}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.actions}>
          <Ionicons name="heart-outline" size={24} color="#000" />
          {/* share icon */}
          <Ionicons name="share-outline" size={24} color="#000" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },

  thumbnailContainer: {
    position: "relative",
    width: "100%",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  title: {
    paddingVertical: 10,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "left",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 12,
    color: "#333",
    marginHorizontal: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
  },
});
