import React from "react";
import { View, Text, Button, StyleSheet, Dimensions,TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;

const [email,setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

export default function LoginScreen({navigation}){
    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Login</Text>
            <View style={styles.buttonContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="visible-password"
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Enter"
                    onPress={() => {
                        localStorage.setItem("email",email);
                        navigation.navigate('Profile')
                    }}
                />
            </View>
        </View>
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
    },
    buttonContainer:{
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    input:{
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    }
});