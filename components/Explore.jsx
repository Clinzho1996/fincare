import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Explore = () => {
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
        Explore
      </Text>
      <View style={styles.explore}>
        <TouchableOpacity style={styles.item}>
          <Image
            source={require("../assets/images/savings.png")}
            style={{ width: 48, height: 48 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#0D1420",
            }}
          >
            Savings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image
            source={require("../assets/images/invest.png")}
            style={{ width: 48, height: 48 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#0D1420",
            }}
          >
            Investment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image
            source={require("../assets/images/loan.png")}
            style={{ width: 48, height: 48, objectFit: "contain" }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#0D1420",
            }}
          >
            Loan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image
            source={require("../assets/images/auction.png")}
            style={{ width: 48, height: 48 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#0D1420",
            }}
          >
            Auctions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image
            source={require("../assets/images/p2p.png")}
            style={{ width: 48, height: 48 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#0D1420",
            }}
          >
            P2P Loan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
  },
  explore: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 10,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
