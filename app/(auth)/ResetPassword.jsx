import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
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

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const [form, setForm] = useState({
    email: "",
  });

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
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
            color: "#101010",
            fontFamily: "Poppins-Bold",
            textTransform: "none",
          }}
        >
          Confirm OTP
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          We’ve sent a code to your provided email
        </Text>
      </View>
      {/* forms for registration */}
      <View style={{ paddingTop: 30, paddingHorizontal: 30 }}>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text });
                !text && thirdInput.current.focus();
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
          onPress={() => router.push("/NewPassword")}
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
            Reset Password
          </Text>
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="white"
              style={{ marginRight: 5 }}
            />
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            Experiencing issues receiving the code?
          </Text>
          <TouchableOpacity onPress={() => router.push("Register")}>
            <Text
              style={{
                color: "#0092DD",
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                textDecorationLine: "underline",
              }}
            >
              Resend Code
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
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
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
    width: 64,
    height: 54,
  },
  otpText: {
    fontSize: 25,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});

export default ResetPassword;
