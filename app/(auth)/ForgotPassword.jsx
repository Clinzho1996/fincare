import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#DEDEDE",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="arrow-back-circle-outline" color="#000" size={20} />

          <Text
            style={{
              color: "#131313",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#0D1420",
            fontFamily: "Poppins-Bold",
            textTransform: "capitalize",
          }}
        >
          Reset Password
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
            textAlign: "center",
          }}
        >
          Enter your registered email, so we could send you an OTP to reset your
          password.
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{ paddingTop: 30, paddingHorizontal: 30 }}>
        <View
          style={{
            paddingBottom: 10,
            borderRadius: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#131316",
              fontSize: 12,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Email Address
          </Text>
          <TextInput
            placeholder="name@example.com"
            placeholderTextColor="#6B7280"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            style={{
              color: "#6B7280",
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              padding: 10,
              marginTop: 10,
              borderRadius: 8,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 2,
            }}
          />
        </View>
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
          onPress={() => router.push("/(auth)/ResetPassword")}
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
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("Register")}>
            <Text
              style={{
                color: "#0092DD",
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height,
    flex: 1,
    width: width,
    paddingVertical: 20,
  },
  uncheckedStyle: {
    borderWidth: 1,
    borderColor: "#9F9E9E",
    borderRadius: 4,
    padding: 0.5,
    width: 20,
    height: 20,
  },
});

export default ForgotPassword;
