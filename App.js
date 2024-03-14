import React from 'react';
import Routers from './routers';
import { useCallback } from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins_black: require("./assets/fonts/Poppins-Black.ttf"),
    poppins_bold: require("./assets/fonts/Poppins-Black.ttf"),
    poppins_medium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppins_regular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppins_semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  )
}
