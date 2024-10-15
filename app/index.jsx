import { requestPermissions } from "@/utils/permission";
import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalProvider";

const Home = () => {
  const { loading, isLogged } = useGlobalContext();

  useEffect(() => {
    const checkPermissions = async () => {
      const hasPermissions = await requestPermissions();
      if (!hasPermissions) {
        console.log("Permissions not granted");
      }
    };

    checkPermissions();
  }, []);

  if (loading) {
    return null;
  }

  if (isLogged) {
    return <Redirect href="/(tabs)/Home" />;
  } else {
    return <Redirect href="/(auth)/Onboarding" />;
  }
};

export default Home;
