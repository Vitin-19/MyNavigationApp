import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import Background from "../components/Background";
import LocalButton from "../components/LocalButton";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;



export default function ProfileScreen({ navigation }) {
    const [name, setName] = useState(null);
    const [email,setEmail] = useState(null)

    useEffect(() => {
        const getName = async () => {
            let storagedName = await AsyncStorage.getItem("name");
            storagedName = storagedName.split(" ");
            for (let i = 0; i < storagedName.length; i++) {
                storagedName[i] = storagedName[i][0].toUpperCase() + storagedName[i].substring(1) + " ";
            }
            setName(storagedName)
        }
        const getEmail = async() => {
            let storagedEmail = await AsyncStorage.getItem("email");
            storagedEmail = storagedEmail.toLocaleLowerCase();
            setEmail(storagedEmail); 
        }
        getName();
        getEmail();
    },[])

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Name: <Text style={styles.info}>{name}</Text></Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Email: <Text style={styles.info}>{email}</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Go to home</Text>
                    </LocalButton>
                </View>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => navigation.navigate('Details')}>
                        <Text style={styles.buttonText}>Go to details</Text>
                    </LocalButton>
                </View>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => {
                        Alert.alert(
                            "Log out",
                            "Are you sure that you want to log out ?",
                            [
                                { text: "Cancel" },
                                {
                                    text: "Ok", onPress: async () => {
                                        await AsyncStorage.clear();
                                        navigation.replace('Login');
                                    }
                                }
                            ]
                        )
                    }
                    }
                    >
                        <Text style={styles.buttonText}>Log out</Text>
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
        color: '#f0f8ff'
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
    },
    infoContainer: {
        width: windowWidth * 0.5,
        margin: 5,
    },
    info: {
        fontWeight: 'normal',
        color: '#f0f8ff'
    },
    infoTitle: {
        fontWeight: 'bold',
        color: '#f0f8ff'
    }

});