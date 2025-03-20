import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./app/screen/HomeScreen";
import ProfileScreen from "./app/screen/ProfileScreen";
import SearchScreen from "./app/screen/SearchScreen";
import SettingsScreen from "./app/screen/SettingsScreen";
import ArticleDetail from "./app/screen/ArticleDetail";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const backgroundColor = "#1877F2";
const foregroundColor = "#fff";
const textColor = "#1a468e";

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "blue",
        // // tabBarInactiveTintColor: "#000",
        // tabBarStyle: {
        //   position: "absolute",
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   elevation: 0,
        //   backgroundColor: "#fff",
        //   borderTopWidth: 0,
        //   height: 60,
        // },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArticleDetails"
        component={ArticleDetail}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerActiveTintColor: backgroundColor,
            drawerInactiveTintColor: textColor,
            drawerStyle: {
              width: 300,
              backgroundColor: "#fff",

              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
