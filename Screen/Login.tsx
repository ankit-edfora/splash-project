import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    StatusBar
} from "react-native";
import { TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { styles } from "../styles/Styles";


export default function Login({ navigation }: { navigation: any }) {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [emailBorderColor, setEmailBorderColor] = useState("white");
    const [passwordBorderColor, setPasswordBorderColor] = useState("white");
    var flag: Int32 = 0


    const saveData = async (emailOrPhone: string) => {
        try {
            await AsyncStorage.setItem(emailOrPhone, password)
        } catch (e) {
            Alert.alert("Unable to save data")
        }
    }
    const getData = async (emailOrPhone: string) => {
        //console.log(emailOrPhone)
        try {
            let password = await AsyncStorage.getItem(emailOrPhone);
            //console.log("password--->",listlayana)
            setPasswordBorderColor("white")
            if (password == null) {
                setPasswordBorderColor("red")
                return "User is not registered!";
            }
            return password;
        } catch (e) {
            setPasswordBorderColor("red")
            return "User is not registered!";
        }
    };

    const onPressLogin = async () => {

        if (password == "") {
            setPasswordBorderColor("red")
        }
        valiDate();
        if (flag == 1) {
            let storedPassword = await AsyncStorage.getItem(emailOrPhone);
            if (storedPassword == "") {
                await saveData(emailOrPhone);
                navigation.navigate('Dashboard');
                setPasswordBorderColor("white")
            } else if (storedPassword == password) {
                navigation.navigate('Dashboard');
                setPasswordBorderColor("white")
            } else {
                setPasswordBorderColor("red")
            }

        }
    }

    const onPressForgotPassword = async () => {
        const password = await getData(emailOrPhone);
        Alert.alert(password)
    }

    function valiDate() {
        validate.then(function (val) {
            setEmailBorderColor("white")
            flag = 1
        }
        ).catch(function (err) {
            setEmailBorderColor("red")
            throw err;
        });
    }
    const validate = new Promise(function (resolve, reject) {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const regPhone = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        if (regEmail.test(emailOrPhone) == true || regPhone.test(emailOrPhone) == true) {
            resolve("OK");
        } else {
            reject("Err");
        }
    });

    const showEye = () => {
        return (
            <TextInput.Icon icon={showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)} />
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.inputInfo}>
                <View style={[styles.inputView, { borderColor: emailBorderColor }]}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email/Phone."
                        placeholderTextColor="#003f5c"
                        onChangeText={(emailOrPhone) => setEmailOrPhone(emailOrPhone)}
                    />

                </View>
                {emailBorderColor === "red" ? <Text style={styles.errorMsg}> Invalid Email</Text> : <Text></Text>}


                <View style={[styles.inputView, { borderColor: passwordBorderColor }]}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={showPassword}
                        right={showEye()}
                        onChangeText={(password) => setPassword(password)}
                    />

                </View>

                {passwordBorderColor === "red" ? <Text style={styles.errorMsg}> Invalid Password</Text> : <Text></Text>}
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
