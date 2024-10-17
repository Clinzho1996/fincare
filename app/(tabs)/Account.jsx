import ProfileLink from "@/components/ProfileLink";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAvatar } from "../../context/AvatarContext";

const height = Dimensions.get("window").height;

const Account = () => {
  const { avatarUri, setAvatarUri } = useAvatar();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const loadSavedAvatar = async () => {
    try {
      const savedAvatarUri = await AsyncStorage.getItem("avatarUri");
      if (savedAvatarUri) {
        setAvatarUri(savedAvatarUri);
      }
    } catch (error) {
      console.log("Error loading saved avatar:", error);
    }
  };

  useEffect(() => {
    loadSavedAvatar();
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      router.push("(auth)/Login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#0092DD"} style="light" />
      <View
        style={{
          backgroundColor: "#0092DD",
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "#F6F8FA",
            padding: 5,
            borderWidth: 1,
            borderColor: "#E2E4E9",
            marginHorizontal: 20,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "justify-between",
              alignItems: "center",
              gap: 10,
              padding: 10,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderRadius: 12,
              borderColor: "#E2E4E9",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20,
                width: "85%",
              }}
            >
              <View>
                {avatarUri ? (
                  <Image
                    source={{ uri: avatarUri }}
                    style={{ width: 55, height: 55, borderRadius: 55 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/avatar.png")}
                    style={{ width: 55, height: 55 }}
                  />
                )}
              </View>
              <View>
                <Text
                  style={{
                    color: "#0A0D14",
                    fontSize: 16,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Dev Clinton
                </Text>
                <Text
                  style={{
                    color: "#6B7280",
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                    textDecorationLine: "underline",
                  }}
                >
                  confidinho@yahoo.com
                </Text>
              </View>
            </View>
            <View style={{ width: "15%" }}>
              <TouchableOpacity onPress={() => {}}>
                <Feather name="edit" size={20} color="#0A0D14" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingHorizontal: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: 40,
        }}
      >
        <ProfileLink
          title="Profile"
          handlePress={() => {}}
          image={require("../../assets/images/pre.png")}
        />
        <ProfileLink
          title="Auction Management"
          handlePress={() => {}}
          image={require("../../assets/images/settings.png")}
        />
        <ProfileLink
          title="Notifications"
          handlePress={() => {}}
          image={require("../../assets/images/notify.png")}
        />
        <ProfileLink
          title="Settings"
          handlePress={() => {}}
          image={require("../../assets/images/settings.png")}
        />
        <ProfileLink
          title="Help Center"
          handlePress={() => {}}
          image={require("../../assets/images/help.png")}
        />
        <ProfileLink
          title="Contact"
          handlePress={() => {}}
          image={require("../../assets/images/contact.png")}
        />
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 70,
          }}
        >
          <SimpleLineIcons name="logout" size={24} color="#EA4335" />
          <Text
            style={{
              color: "#EA4335",
              fontSize: 15,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height,
  },
});
