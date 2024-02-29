import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import of application pages to create the route
import Login from './pages/common_pages/Login'
import RegisterOptions from './pages/common_pages/RegisterOptions'

import Register from "./pages/app_client/Register";
import Home from "./pages/app_client/Home";
import ShopCart from "./pages/app_client/ShopCart";

const Stack = createStackNavigator();

const Routers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ShopCart" component={ShopCart} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                <Stack.Screen name="RegisterOptions" component={RegisterOptions} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routers;
