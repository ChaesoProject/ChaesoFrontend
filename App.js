// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// App.js
import React from 'react';
import Routers from './routers';
import { useCallback } from 'react';
import { useFonts } from "expo-font";

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
    <Routers />
  )
}
