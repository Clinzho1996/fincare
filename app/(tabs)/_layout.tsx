import { useAvatar } from "@/context/AvatarContext";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TabsLayout = () => {
  const { avatarUri, setAvatarUri } = useAvatar();

  const loadSavedAvatar = async () => {
    try {
      const savedAvatarUri = await AsyncStorage.getItem("avatarUri");
      if (savedAvatarUri) {
        setAvatarUri(savedAvatarUri);
      }
    } catch (error) {
      console.log("Error loading saved avatar:", error);
    }
  };

  useEffect(() => {
    loadSavedAvatar();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 80,
          borderTopColor: "transparent",
          paddingTop: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.5,
          shadowRadius: 1,
          elevation: 2,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.nav}>
              <MaterialCommunityIcons
                name={focused ? "home-variant" : "home-variant-outline"}
                size={30}
                color={focused ? "#0092DD" : "#6B7280"}
              />
              <Text style={[styles.text, focused && styles.textFocused]}>
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Finance"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.nav}>
              <Ionicons
                name={focused ? "pie-chart" : "pie-chart-outline"}
                size={30}
                color={focused ? "#0092DD" : "#6B7280"}
              />
              <Text style={[styles.text, focused && styles.textFocused]}>
                Finance
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="MyBids"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.nav}>
              <MaterialIcons
                name={focused ? "insert-chart" : "insert-chart-outlined"}
                size={30}
                color={focused ? "#0092DD" : "#6B7280"}
              />
              <Text style={[styles.text, focused && styles.textFocused]}>
                My Bids
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.nav}>
              {avatarUri ? (
                <View
                  style={{
                    padding: 3,
                    borderWidth: 1,
                    borderRadius: 40,
                    borderColor: "#E5E7EB",
                  }}
                >
                  <Image
                    source={{ uri: avatarUri }}
                    style={{ width: 25, height: 25, borderRadius: 25 }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderRadius: 40,
                    borderColor: "#E5E7EB",
                  }}
                >
                  <Image
                    source={require("../../assets/images/avatar.png")}
                    style={{ width: 25, height: 25, borderRadius: 25 }}
                  />
                </View>
              )}
              <Text style={[styles.text, focused && styles.textFocused]}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  text: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  textFocused: {
    color: "#0092DD",
  },
  nav: {
    justifyContent: "center",
    alignItems: "center",
  },
});
