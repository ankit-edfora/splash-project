import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
  Switch,
} from "react-native";
import { TextInput } from "react-native-paper";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


export default function Login({navigation}: {navigation: any}) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  var flag: Int32 = 0


  const saveData = async (emailOrPhone:string) => {
    try {
      await AsyncStorage.setItem(emailOrPhone, password)
    } catch (e) {
        Alert.alert("Unable to save user details")
    }
  }
  const getData = async (emailOrPhone:string) => {
    //console.log(emailOrPhone)
    try {
      let password = await AsyncStorage.getItem(emailOrPhone);
      //console.log("password--->",listlayana)
      if(password == null) {
        return "User is not registered!";
      }
      return password;
    } catch (e) {
        return "User is not registered!";
    }
  };

  const onPressLogin = async () => {

    if(password == "") {
        Alert.alert("Password cannot be empty")
    } 
    valiDate(); 
    if(flag == 1) 
    { 
        let storedPassword = await AsyncStorage.getItem(emailOrPhone);
        if(storedPassword == "") {
        await saveData(emailOrPhone); 
        navigation.navigate('Dashboard');
        } else if(storedPassword == password) {
            navigation.navigate('Dashboard');
        } else {
            Alert.alert("Incorrect Password!");
        }
        
    }
  }

  const onPressForgotPassword = async () => {
    const password = await getData(emailOrPhone); 
    Alert.alert(password)
  }
  
  function valiDate() {
    validate.then(function(val){
        flag = 1
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
          secureTextEntry={showPassword}
          right={<TextInput.Icon name={showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)} />}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
     
 
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}> 
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
    padding: 7,
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