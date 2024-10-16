import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="Register" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" options={{ headerShown: false }} />
      <Stack.Screen name="UserWelcome" options={{ headerShown: false }} />
      <Stack.Screen name="NewPassword" options={{ headerShown: false }} />
      <Stack.Screen name="VerifyEmail" options={{ headerShown: false }} />
      <Stack.Screen name="CreatePassword" options={{ headerShown: false }} />
      <Stack.Screen name="Success" options={{ headerShown: false }} />
      <Stack.Screen name="Membership" options={{ headerShown: false }} />
      <Stack.Screen name="Identity" options={{ headerShown: false }} />
      <Stack.Screen name="Review" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
