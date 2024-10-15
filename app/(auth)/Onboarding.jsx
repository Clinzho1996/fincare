import CarouselCard from "@/components/Carousel";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCard />
      <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderWidth: 1,
            borderColor: "#E9E9E9",
            borderRadius: 8,
          }}
          onPress={() => router.push("/(auth)/Login")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
            }}
          >
            Returning user - Login
          </Text>
        </TouchableOpacity>
        <View style={{ paddingVertical: 30 }}>
          <Image
            source={require("../../assets/images/or.png")}
            style={{ width: width - 50, height: 10, objectFit: "cover" }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#0092DD",
            padding: 10,
            borderWidth: 1,
            borderColor: "#0092DD",
            borderRadius: 8,
          }}
          onPress={() => router.push("/(auth)/Register")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: "#fff",
            }}
          >
            New user - Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#fff",
  },
});
