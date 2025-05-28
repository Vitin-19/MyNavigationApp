import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error, showError] = useState(false);
    useEffect(() => {
        const getLogin = async () => {
            if (JSON.parse(await AsyncStorage.getItem("loginState"))) {
                navigation.navigate("Profile")
            }
        }
        getLogin();
    }, [])
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        keyboardType="name-phone-pad"
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Enter"
                        onPress={async () => {
                            if (name && email && password) {
                                await AsyncStorage.setItem("email", email);
                                await AsyncStorage.setItem("name", name);
                                await AsyncStorage.setItem("password", password);
                                await AsyncStorage.setItem("loginState", JSON.stringify(true));
                                navigation.replace('Profile');
                            } else {
                                showError(true);
                            }
                        }}
                    />
                </View>
                {error && (
                    <View style={{ margin: 5 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Missing statements</Text>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    inputContainer: {
        backgroundColor: 'transparent',
    },
    input: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    }
});