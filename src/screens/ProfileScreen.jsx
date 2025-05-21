import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, Alert } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({navigation}){
    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Profile</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Name: <Text style={styles.info}>{AsyncStorage.getItem("name")}</Text></Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Email: <Text style={styles.info}>{AsyncStorage.getItem("email")}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Log out"
                    onPress={() => Alert.alert(
                        "Log out",
                        "Are you sure that you want to log out ?",
                        [
                            { text:"Cancel"},
                            { text: "Ok", onPress: async() => {
                                await AsyncStorage.clear();
                                navigation.navigate('Login');
                            }} 
                        ]
                    )}
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
        textDecorationLine:'underline'
    },
    buttonContainer:{
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    infoContainer:{
        width: windowWidth * 0.5,
        margin:5,
        textDecorationLine:'underline',
    },
    info:{
        textDecorationLine:'underline',
        fontWeight:'normal'
    },
    infoTitle:{
        fontWeight:'bold'
    }

});