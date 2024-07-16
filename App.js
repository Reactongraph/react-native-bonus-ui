import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BonusScreen from "./container/BonusScreen";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Light: require("./assets/font/Poppins-Light.ttf"),
    Medium: require("./assets/font/Poppins-Medium.ttf"),
    Regular: require("./assets/font/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    // <SafeAreaProvider>
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <StatusBar translucent />
      <BonusScreen />
    </View>
    // </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
