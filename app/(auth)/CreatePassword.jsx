import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CreatePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
          Step 3 of 5
        </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar progress={0.6} color={"#0092DD"} />
      </View>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#101010",
            fontFamily: "Poppins-Bold",
            textTransform: "none",
          }}
        >
          Create your password
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 12,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          We just sent a 6-digit code to femi.fincare@gmail.com, enter it below:
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          paddingVertical: 20,
          gap: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#9F9E9E40",
        }}
      >
        <Text>Password</Text>
        <TextInput
          placeholder="enter your password"
          style={{ color: "#000" }}
          placeholderTextColor="#0D142080"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          gap: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#0092DD",
            paddingVertical: 10,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 10,
            width: width - 60,
          }}
          onPress={() => router.push("/(auth)/Success")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
            }}
          >
            Create Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height,
    flex: 1,
    width: width,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 120,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
