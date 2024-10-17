import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: "#F6F8FA",
            padding: 20,
            borderRadius: 10,
            marginTop: 10,
            overflow: "hidden",
            borderColor: "#E2E4E9",
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 12,
                color: "#6B7280",
              }}
            >
              Recent Transactions
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 12,
                  color: "#6B7280",
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
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
            <View>
              <Text
                style={{
                  color: "#0A0D14",
                  fontFamily: "Poppins-Bold",
                  fontSize: 13,
                }}
              >
                Withdraw
              </Text>
              <Text
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 12,
                }}
              >
                22 Sep. 2024 / 12:03 AM
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#F70000",
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                -₦12,000.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
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
            <View>
              <Text
                style={{
                  color: "#0A0D14",
                  fontFamily: "Poppins-Bold",
                  fontSize: 13,
                }}
              >
                Autosave
              </Text>
              <Text
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 12,
                }}
              >
                22 Sep. 2024 / 12:03 AM
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#32FC65",
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                +N20,983.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
  },
});
