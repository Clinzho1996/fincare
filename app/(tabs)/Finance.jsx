import { AntDesign } from "@expo/vector-icons";
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

const height = Dimensions.get("window").height;
const Finance = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff", paddingTop: 70 }}>
      <StatusBar style="dark" />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#101010",
            fontFamily: "Poppins-Bold",
            textTransform: "none",
          }}
        >
          Finance
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          Stress-Free Financial Planning for Success
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F6F8FA",
          paddingHorizontal: 10,
          paddingVertical: 30,
          height: height,
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#fff", padding: 10, borderRadius: 11 }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 11,
              borderWidth: 2,
              borderColor: "#2F30370D",
            }}
          >
            <Image
              source={require("../../assets/images/search.png")}
              style={{ width: 32, height: 28 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "#101010",
                fontFamily: "Poppins-SemiBold",
                textTransform: "none",
                paddingTop: 10,
              }}
            >
              Goal Setting & Budgeting
            </Text>
            <View style={styles.details}>
              <AntDesign name="checkcircleo" size={12} color="#000" />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Set financial goals and create a budget.{" "}
              </Text>
            </View>
            <View style={styles.details}>
              <AntDesign name="checkcircleo" size={12} color="#000" />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Recurrent/Non-Recurrent Expense breakdown
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 11,
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 11,
              borderWidth: 2,
              borderColor: "#2F30370D",
            }}
          >
            <Image
              source={require("../../assets/images/search.png")}
              style={{ width: 32, height: 28 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "#101010",
                fontFamily: "Poppins-SemiBold",
                textTransform: "none",
                paddingTop: 10,
              }}
            >
              Spending Tracking
            </Text>
            <View style={styles.details}>
              <AntDesign name="checkcircleo" size={12} color="#000" />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Track daily spending against the budget target.
              </Text>
            </View>
            <View style={styles.details}>
              <AntDesign name="checkcircleo" size={12} color="#000" />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Finance;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
});
