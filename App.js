import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';


const Stack = createStackNavigator();

export default function App(){
    return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name='Home' component={HomeScreen} options={{ headerStyle: styles.header, headerTintColor:'#f0f8ff' }}/>
              <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false, headerStyle: styles.header,  headerTintColor:'#f0f8ff'}}/>
              <Stack.Screen name='Details' component={DetailsScreen} options={{ headerStyle: styles.header,  headerTintColor:'#f0f8ff'}}/>
              <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown:false, headerStyle: styles.header,  headerTintColor:'#f0f8ff'}}/>
            </Stack.Navigator>
          </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#3399ff',
    },
})