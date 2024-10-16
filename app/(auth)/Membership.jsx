import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Checkbox, Modal, Portal, ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAvatar } from "../../context/AvatarContext";
import { requestPermissions } from "../../utils/permission";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Membership = () => {
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  };

  const [isPickerVisible, setPickerVisible] = useState(false); // Control picker visibility

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  useEffect(() => {
    const checkPermissions = async () => {
      const hasPermissions = await requestPermissions();
      if (!hasPermissions) {
        try {
          // Request camera permission
          const { status: cameraStatus } =
            await Camera.requestCameraPermissionsAsync(); // Updated method name

          // Request media library permissions
          const { status: mediaLibraryStatus } =
            await MediaLibrary.requestPermissionsAsync();

          if (cameraStatus !== "granted" || mediaLibraryStatus !== "granted") {
            // Show an error message
            if (Platform.OS === "android") {
              ToastAndroid.show(
                "You don't have the required permissions. Please allow them in settings.",
                ToastAndroid.LONG
              );
            }
            return false;
          }

          return true;
        } catch (error) {
          console.error("Permission error:", error);
          return false;
        }
        console.log("Permissions not granted");
      }
    };

    checkPermissions();
  }, []);

  const { avatarUri, setAvatarUri } = useAvatar();

  const openImagePicker = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        const selectedImageUri = result.assets[0].uri;
        setAvatarUri(selectedImageUri);
        await AsyncStorage.setItem("avatarUri", selectedImageUri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              paddingBottom: 10,
            }}
          >
            Service Level Agreement
          </Text>
          <Text
            style={{
              fontSize: 12,
              colo: "#6B7280",
              fontFamily: "Poppins-regular",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Mauris leo at fermentum
            habitant a. Arcu eget et etiam tortor id enim est faucibus dictumst.
            Tincidunt a commodo volutpat eget. Maecenas facilisis aenean eget
            sem lacus mattis a egestas. Non tincidunt vulputate elit id enim
            tortor ornare viverra. Ultrices vel augue eget adipiscing iaculis
            placerat vestibulum leo quam. Vitae velit eros turpis interdum fames
            sem pellentesque.
          </Text>
          <Text
            style={{
              fontSize: 12,
              colo: "#6B7280",
              fontFamily: "Poppins-regular",
              marginTop: 10,
            }}
          >
            You are also required to pay a minimum of 10,000 to your savings
            account before you can be confirmed as a registered member
          </Text>
        </Modal>
      </Portal>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold" }}>
          Step 4 of 5
        </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar progress={0.8} color={"#0092DD"} />
      </View>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 30,
          alignItems: "flex-start",
          gap: 10,
          justifyContent: "flex-start",
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
          Create Your Membership Profile
        </Text>
        <Text
          style={{
            color: "#6B7280",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            paddingTop: 10,
          }}
        >
          Provide your personal information
        </Text>
      </View>
      {/* forms for registration */}
      <ScrollView contentContainerStyle={{ backgroundColor: "#FCFCFC" }}>
        <View style={{ paddingTop: 30 }}>
          {/* avatar uplaod */}
          <View style={{ backgroundColor: "#0092DD", padding: 30 }}>
            {avatarUri ? (
              <ImageBackground
                style={{
                  alignItems: "center",
                  position: "relative",
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                  justifyContent: "flex-start",
                  padding: 10,
                  backgroundColor: "#fff",
                  marginBottom: -40,
                }}
                source={{ uri: avatarUri }}
                imageStyle={{ borderRadius: 80 }}
              >
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../../assets/images/edit.png")}
                    style={{ width: 40, height: 40 }}
                  />
                  <Text style={{ color: "#fff", fontFamily: "Poppins-Medium" }}>
                    Upload
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  position: "relative",
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                  justifyContent: "flex-start",
                  padding: 10,
                  backgroundColor: "#fff",
                  marginBottom: -40,
                }}
              >
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../../assets/images/edit.png")}
                    style={{ width: 40, height: 40 }}
                  />
                  <Text style={{ color: "#fff", fontFamily: "Poppins-Medium" }}>
                    Upload
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* form submission */}
          <View
            style={{
              padding: 30,
              borderTopColor: "#F0F0F0",
              borderTopWidth: 1,
              marginTop: 40,
            }}
          >
            <View
              style={{
                paddingBottom: 10,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  color: "#131316",
                  fontSize: 12,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                First name
              </Text>
              <TextInput
                placeholder="e.g Dev"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
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
                Last name
              </Text>
              <TextInput
                placeholder="e.g Clinton"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
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
                Other names (optional)
              </Text>
              <TextInput
                placeholder="e.g Ochuko"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
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
                Gender
              </Text>
              <TouchableOpacity
                onPress={togglePicker}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  padding: 10,
                  marginTop: 10,
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
                <Text style={{ color: "#6B7280", fontSize: 14 }}>
                  {gender ? gender : "Select Gender"}
                </Text>
              </TouchableOpacity>

              {isPickerVisible && (
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => {
                    setGender(itemValue);
                    setPickerVisible(false);
                  }}
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              )}
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
                BVN
              </Text>
              <TextInput
                placeholder="e.g Enter your 11 digit number"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
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
                Profession
              </Text>
              <TextInput
                placeholder="e.g Software Developer"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
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
                Source of Income
              </Text>
              <TextInput
                placeholder="e.g Salary, Self-Employment, Others"
                placeholderTextColor="#6B7280"
                style={{
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  padding: 10,
                  marginTop: 10,
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
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
            paddingHorizontal: 30,
            paddingBottom: 20,
            marginTop: 0,
          }}
        >
          <View style={checked ? styles.checkedStyle : styles.uncheckedStyle}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color={checked ? "#0092DD" : undefined} // Custom color when checked
              uncheckedColor="transparent" // Make unchecked color transparent
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: "#131316",
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              I agree to Fincare's{" "}
            </Text>
            <TouchableOpacity onPress={showModal}>
              <Text
                style={{
                  color: "#0092DD",
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
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
            onPress={() => router.push("/(auth)/Identity")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontFamily: "Poppins-SemiBold",
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
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 120,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  uncheckedStyle: {
    borderWidth: 1,
    borderColor: "#9F9E9E",
    borderRadius: 4,
    padding: 0.5,
    width: 20,
    height: 20,
  },
  checkedStyle: {
    width: 40,
  },
});

export default Membership;
