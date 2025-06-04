import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "../components/Background";
import LocalButton from "../components/LocalButton";

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
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
        >
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
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholderTextColor={'#f0f8ff'}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <LocalButton onclickFuncion={async() => {
                                if (name && email && password) {
                                    await AsyncStorage.setItem("email", email);
                                    if(!parseInt(name)) await AsyncStorage.setItem("name", name);else return showError(true);
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
        </KeyboardAwareScrollView>
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
        textDecorationLine: 'underline',
        color:'#f0f8ff'
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 24,
        textAlign:'center'
    },
    inputContainer: {
        backgroundColor: 'transparent',
    },
    input: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderColor: '#f0f8ff',
        borderWidth: 2,
        color:'#f0f8ff'
    },
    screen_background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});