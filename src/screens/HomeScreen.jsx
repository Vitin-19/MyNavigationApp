import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import Background from "../components/Background";
import LocalButton from "../components/LocalButton";

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    const [firstName, setFirstName] = React.useState(null)
    React.useEffect(() => {
        const getName = async () => {
            const name = await AsyncStorage.getItem("name");
            setFirstName(name.split(" ")[0]);
        }
        getName();
    })
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>
                <Text style={styles.title}>Hello {firstName}</Text>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => navigation.navigate('Details')}>
                        <Text style={styles.buttonText}>Go to details</Text>
                    </LocalButton>
                </View>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Go to profile</Text>
                    </LocalButton>
                </View>
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
        textDecorationLine: 'underline'
    },
    buttonText:{
        fontSize: 24,
        textAlign:'center'
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});