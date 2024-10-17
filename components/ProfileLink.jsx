import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileLink = ({ title, handlePress, image }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#0000001A",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 15,
        }}
      >
        <View>
          <Image
            source={image}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#0A0D14",
              fontFamily: "Poppins-SemiBold",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <MaterialIcons
          name="arrow-forward-ios"
          color="#1D202B"
          size={18}
          style={{
            padding: 5,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileLink;

const styles = StyleSheet.create({});
