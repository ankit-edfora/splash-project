import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
} from "react-native";

export default function Login({navigation}: {navigation: any}) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  function valiDate() {
    validate.then(function(val){
       setEmailOrPhone(emailOrPhone);
      }
    ).catch(function(err){
      Alert.alert("Invalid credentials!!");
      throw err;
    });
  }
  const validate = new Promise(function(resolve, reject) {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const regPhone = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if(regEmail.test(emailOrPhone) == true || regPhone.test(emailOrPhone) == true) {
      resolve("OK"); 
    } else {
      reject("Err");
    }
  });
  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email/Phone."
          placeholderTextColor="#003f5c"
          onChangeText={(emailOrPhone) => setEmailOrPhone(emailOrPhone)} 
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => {valiDate(); navigation.navigate('Dashboard');}}> 
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});