import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Article, Paginate } from "../../types";

export default function HomeScreen() {
  const [articles, setArticles] = useState<Paginate<Article>>();
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  useEffect(() => {
    fetchArticles(1);
  }, []);

  const fetchArticles = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/blog?page=${page}`
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (!articles) {
    return <Text>No articles found</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(articles)}</Text>
    </View>
  );
}
