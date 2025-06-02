import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LocalButton({onclickFuncion,children}) {
    return(
        <TouchableOpacity onPress={onclickFuncion} style={styles.button}>
            {children}
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderColor:'#f0f8ff',
        borderWidth: 2,
    },
})