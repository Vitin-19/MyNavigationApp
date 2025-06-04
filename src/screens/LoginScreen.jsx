import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from "../components/Background";
import LocalButton from "../components/LocalButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error, showError] = useState(false);
    const [showPassword, setShowPassoword] = useState(false)


    useEffect(() => {
        const getLogin = async () => {
            if (JSON.parse(await AsyncStorage.getItem("loginState"))) {
                navigation.navigate("Profile")
            }
        }
        getLogin();
    }, []);

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        keyboardType="name-phone-pad"
                        onChangeText={setName}
                        placeholderTextColor={'#f0f8ff'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        placeholderTextColor={'#f0f8ff'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                        placeholderTextColor={'#f0f8ff'}
                    />
                    <TouchableOpacity onPress={() => {
                        if (showPassword) {
                            setShowPassoword(false)
                        } else {
                            setShowPassoword(true);
                        }
                    }}>
                        <Icon
                            name={showPassword ? 'eye' : 'eye-off'}
                            color={'#f0f8ff'}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={async () => {
                        if (name.toLowerCase() === "adm" && email.toLowerCase() === "adm@gmail.com" && password === "@adm123") {
                            await AsyncStorage.setItem("email", email);
                            if (!parseInt(name) && name) await AsyncStorage.setItem("name", name); else return showError(true);
                            await AsyncStorage.setItem("password", password);
                            await AsyncStorage.setItem("loginState", JSON.stringify(true));
                            navigation.replace('Profile');
                        } else {
                            showError(true);
                        }
                    }
                    }
                    >
                        <Text style={styles.buttonText}>Enter</Text>
                    </LocalButton>
                </View>
                {error && (
                    <View style={{ margin: 5 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Missing statements or invalid informations</Text>
                    </View>
                )}
            </View>
        </Background>

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#f0f8ff'
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center'
    },
    inputContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderColor: '#f0f8ff',
        borderWidth: 2,
        paddingHorizontal: 10
    },
    input: {
        color: '#f0f8ff',
        flex: 1,
    },
    screen_background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});