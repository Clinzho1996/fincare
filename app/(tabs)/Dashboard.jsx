import Explore from "@/components/Explore";
import Savings from "@/components/Savings";
import Transactions from "@/components/Transactions";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#0092DD"} style="light" />
      <View
        style={{
          backgroundColor: "#0092DD",
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{ color: "#fff", fontSize: 16, fontFamily: "Poppins-Bold" }}
          >
            Hi, Dev-Clinton
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
      <Savings />
      <Explore />
      <Transactions />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    height: height,
  },
});
