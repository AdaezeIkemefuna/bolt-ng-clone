import { createStackNavigator } from '@react-navigation/stack';
import InputNumberScreen from '../screens/auth/InputNumberScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import OtpScreen from '../screens/auth/OtpScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='SignIn'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='InputNumber' component={InputNumberScreen} />
      <Stack.Screen name='otp' component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
