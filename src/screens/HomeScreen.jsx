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
            let firstName = name.split(" ")[0];
            firstName = firstName[0].toUpperCase() + firstName.substring(1);
            setFirstName(firstName);
        }
        getName();
    },[])
    return (
        <Background>
            <View style={styles.container}>
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
        color:'#f0f8ff'
    },
    buttonText:{
        fontSize: 24,
        textAlign:'center'
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});