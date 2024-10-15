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

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
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
          Create New Password
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          Hey there, welcome back!
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{ paddingTop: 30, paddingHorizontal: 30 }}>
        <View
          style={{
            paddingBottom: 10,
            borderRadius: 30,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#131316",
              fontSize: 12,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            New Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              padding: 10,
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
          >
            <TextInput
              placeholder="New Password"
              placeholderTextColor="#6B7280"
              value={form.password}
              secureTextEntry={!showPassword}
              onChangeText={(e) => setForm({ ...form, password: e })}
              style={{
                color: "#6B7280",
                fontFamily: "Poppins-Regular",
                fontSize: 14,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingBottom: 10,
            borderRadius: 30,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#131316",
              fontSize: 12,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Confirm New Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              padding: 10,
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
          >
            <TextInput
              placeholder="Enter Password Again"
              placeholderTextColor="#6B7280"
              value={form.password}
              secureTextEntry={!showPassword}
              onChangeText={(e) => setForm({ ...form, password: e })}
              style={{
                color: "#6B7280",
                fontFamily: "Poppins-Regular",
                fontSize: 14,
              }}
            />
          </View>
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
            Create New Password
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

export default NewPassword;
