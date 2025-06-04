import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function Background({children}){
    return (
        <LinearGradient
            colors={['#3399ff','#add8e6', '#f0f8ff']}
            style={styles.screen_background}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.4, 0.7, 1]}
        >
        {children} 
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen_background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})