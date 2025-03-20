import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Article, Paginate } from "../../types";
import ArticleItem from "../components/ArticleItem";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [articles, setArticles] = useState<Paginate<Article>>();
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  useEffect(() => {
    fetchArticles(1);
  }, []);

  const fetchArticles = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/blog?page=${page}`);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!articles) {
    return <Text>No articles found</Text>;
  }

  const onDetail = (article: Article) => {
    navigation.navigate("ArticleDetails", { article });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => onDetail(item)}>
            <ArticleItem article={item} />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
