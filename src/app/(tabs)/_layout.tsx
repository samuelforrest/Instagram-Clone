import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black"}}>
      <Tabs.Screen 
        name="index"
        options={{ 
          headerTitle: "For you",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> 
        }} 
      />
    </Tabs>
  );
}