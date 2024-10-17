import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;
const MyBids = () => {
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
          My Biddings
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          Your bids towards financial breakthrough
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
        <View
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 14,
                  color: "#0D1420",
                }}
              >
                Action name
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 12,
                  color: "#21CC9E",
                  textTransform: "uppercase",
                }}
              >
                ₦50,000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#F54646",
                }}
              >
                48 hours left
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Bid Amount
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: "#0092DD",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#0092DD",
                  fontSize: 14,
                  fontfamily: "Poppins-SemiBold",
                  textAlign: "center",
                }}
              >
                Revise Bid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 14,
                  color: "#0D1420",
                }}
              >
                Action name
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 12,
                  color: "#21CC9E",
                  textTransform: "uppercase",
                }}
              >
                ₦50,000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#F54646",
                }}
              >
                48 hours left
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Bid Amount
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: "#0092DD",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#0092DD",
                  fontSize: 14,
                  fontfamily: "Poppins-SemiBold",
                  textAlign: "center",
                }}
              >
                Revise Bid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 14,
                  color: "#0D1420",
                }}
              >
                Action name
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 12,
                  color: "#21CC9E",
                  textTransform: "uppercase",
                }}
              >
                ₦50,000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#F54646",
                }}
              >
                48 hours left
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Bid Amount
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: "#0092DD",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#0092DD",
                  fontSize: 14,
                  fontfamily: "Poppins-SemiBold",
                  textAlign: "center",
                }}
              >
                Revise Bid
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBids;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
});
