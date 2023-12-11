import React from "react";
import { SafeAreaView, Text, StyleSheet,View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "./components/SignUpScreen";
// import SignInScreen from "./components/SignInScreen";
import Constants from "expo-constants"

const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

 
export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <View>
        <Text>You are Signed in</Text>
        </View>
        </SignedIn>
        <SignedOut>
       <SignUpScreen/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});