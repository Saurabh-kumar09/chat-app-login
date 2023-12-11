import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
 
export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
 
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
 
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });
 
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
 
      setPendingVerification(true);
    } catch (errr) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
 
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
 
      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
 
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
      {!pendingVerification ? (
        <View>
          <TextInput
            autoCapitalize="words"
            value={firstName}
            placeholder="Enter First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <TextInput
            autoCapitalize="words"
            value={lastName}
            placeholder="Enter Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            value={emailAddress}
            placeholder="Enter Email Address"
            onChangeText={(email) => setEmailAddress(email)}
          />
          <TextInput
            value={password}
            placeholder="Enter Password (min. 8 characters)"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={{ marginTop: 20, backgroundColor: "blue", color: "white", padding: 10, textAlign: "center" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            value={code}
            placeholder="Enter Verification Code"
            onChangeText={(code) => setCode(code)}
          />
          <TouchableOpacity onPress={onPressVerify}>
            <Text style={{ marginTop: 20, backgroundColor: "blue", color: "white", padding: 10, textAlign: "center" }}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
