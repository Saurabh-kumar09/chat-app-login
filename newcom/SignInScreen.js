import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
 
export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
 
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        value={emailAddress}
        placeholder="Enter Email Address"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Enter Password (min. 8 characters)"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={{ marginTop: 20, backgroundColor: "blue", color: "white", padding: 10, textAlign: "center" }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
