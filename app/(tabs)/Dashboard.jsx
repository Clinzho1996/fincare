import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#0092DD"} style="dark" />
      <View
        style={{
          backgroundColor: "#0092DD",
          paddingHorizontal: 20,
          paddingVertical: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{ color: "#fff", fontSize: 16, fontFamily: "Poppins-Bold" }}
          >
            Hi, Ajibola
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontFamily: "Poppins-regular",
              paddingTop: 5,
            }}
          >
            What do you want to do today?
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF1A",
            padding: 5,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: "#fff",
          }}
        >
          <Ionicons name="notifications-outline" color="#fff" size={20} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    height: height,
  },
});
