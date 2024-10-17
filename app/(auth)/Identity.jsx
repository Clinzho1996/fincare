import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Identity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
          Step 5 of 5
        </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar progress={1} color={"#0092DD"} />
      </View>
      <ScrollView>
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
            Provide your identity document
          </Text>
          <Text
            style={{
              color: "#6B7280",
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              paddingTop: 10,
            }}
          >
            By selecting your ID type below, you agree that we (and our service
            providers) can collect, use , and tore your biometric information
            for identification verification
          </Text>
        </View>

        {/* Upload files */}
        <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 2,
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <View style={styles.id}>
              <Image
                source={require("../../assets/images/upload.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{
                  color: "#0D1420",
                  fontSize: 14,
                  fontFamily: "Poppins-Bold",
                }}
              >
                Government issued ID
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                  paddingTop: 10,
                }}
              >
                Provide your NIN Slip, Int’l Passport, Voter’s Card or Driver
                License
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginVertical: 20,
                padding: 20,
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#BCBCBC",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                  paddingTop: 10,
                  textAlign: "center",
                }}
              >
                Click to upload
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 2,
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 12,
              marginTop: 20,
            }}
          >
            <View style={styles.id}>
              <Image
                source={require("../../assets/images/upload.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{
                  color: "#0D1420",
                  fontSize: 14,
                  fontFamily: "Poppins-Bold",
                }}
              >
                CAC License ID(optional)
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                  paddingTop: 10,
                }}
              >
                Provide your CAC registration certificate
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginVertical: 20,
                padding: 20,
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#BCBCBC",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                  paddingTop: 10,
                  textAlign: "center",
                }}
              >
                Click to upload
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
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
            onPress={() => router.push("/(auth)/Review")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontFamily: "Poppins-regular",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Identity;

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
  id: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
