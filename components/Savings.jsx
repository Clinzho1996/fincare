import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Savings = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 12,
          color: "#6B7280",
          textTransform: "uppercase",
        }}
      >
        Savings Account
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 4,
          borderColor: "#E2E4E9",
          marginVertical: 10,
        }}
      >
        <View
          style={{ backgroundColor: "#0D1420", padding: 10, borderRadius: 12 }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 12,
              color: "#fff",
            }}
          >
            Current balance
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 24,
              color: "#fff",
            }}
          >
            ₦10,000.00
          </Text>
        </View>
      </View>
      <View style={{ borderTopColor: "#15141D1A", borderTopWidth: 1 }}>
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
              fontFamily: "Poppins-regular",
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Target amount
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 14,
              color: "#0D1420",
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
              fontFamily: "Poppins-regular",
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Annual Percentage Yield
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 14,
              color: "#1DC296",
              textTransform: "uppercase",
            }}
          >
            4.40%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Savings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
    marginTop: -70,
  },
});
