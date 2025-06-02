import { View, Text, StyleSheet, Dimensions } from "react-native";
import Background from "../components/Background";
import LocalButton from "../components/LocalButton";

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Details</Text>
                <View style={styles.buttonContainer}>
                    <LocalButton onclickFuncion={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Go to home</Text>
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
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 24,
        textAlign:'center'
    },
});