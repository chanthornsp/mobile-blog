import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { Article } from "../../types";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

export default function ArticleDetail({ route }: { route: any }) {
  const { article } = route.params as { article: Article };
  const [articleDetail, setArticleDetail] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    onDetail(article.id);
  }, []);

  const onDetail = async (id: number) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/blog/${id}`);
      const data = await response.json();
      setArticleDetail(data);
    } catch (error) {
      setError("Error fetching article details");
      console.error("Error fetching article details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
        <Pressable onPress={() => onDetail(article.id)}>
          <Text style={{ color: "blue" }}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  if (!articleDetail) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No article details found</Text>
        <Pressable onPress={() => onDetail(article.id)}>
          <Text style={{ color: "blue" }}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: articleDetail.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{articleDetail.title}</Text>
        <Text style={styles.date}>{articleDetail.published_at}</Text>
        <RenderHtml
          contentWidth={width - 32} // Account for padding
          source={{ html: articleDetail.content }}
          renderersProps={{
            iframe: {
              scalesPageToFit: true,
              webViewProps: {
                allowsFullscreenVideo: true,
                javaScriptEnabled: true,
                domStorageEnabled: true,
              },
            },
          }}
          tagsStyles={{
            body: {
              fontSize: 16,
              lineHeight: 24,
              color: "#333",
            },
            a: {
              color: "#0066cc",
            },
          }}
        />
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: width * 0.6, // Aspect ratio for the image
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
