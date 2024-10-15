import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Success = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
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
          Account Created! 🎉
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 12,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
            textAlign: "center",
          }}
        >
          Your account has been created successfully. Please proceed to complete
          your membership form to finalize your registration and access all
          features.
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          source={require("../../assets/images/success.png")}
          style={{ width: 190, height: 370 }}
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
          onPress={() => router.push("/(auth)/CreatePassword")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontFamily: "Poppins-regular",
            }}
          >
            Continue - Complete your membership form
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 10,
            width: width - 60,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
              fontSize: 14,
              fontFamily: "Poppins-regular",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Success;

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
