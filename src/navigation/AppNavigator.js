import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoginForm">
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="RegisterForm" component={RegisterForm} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
