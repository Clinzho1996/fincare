import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Platform, ToastAndroid } from "react-native";

export const requestPermissions = async () => {
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
};
