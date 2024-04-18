import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importe as páginas com createStackNavigator
import Register from "./pages/app_client/Register";
import TransporterRegister from "./pages/app_transporter/TransporterRegister";
import Login from "./pages/common_pages/Login";
import RegisterOptions from "./pages/common_pages/RegisterOptions";

// páginas do lado cliente
import Home from "./pages/app_client/Home";
import ShopCart from "./pages/app_client/ShopCart";
import ClientHistoric from "./pages/app_client/ClientHistoric";
import Profile from "./pages/app_client/Profile";

// páginas do lado entregador
import Orders from "./pages/app_transporter/Orders";
import TransporterHistoric from "./pages/app_transporter/TransporterHistoric";
import TransporterProfile from "./pages/app_transporter/TransporterProfile";
import Dashboard from "./pages/app_transporter/Dashboard";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Tab1 = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();

const Routers = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterOptions"
                component={RegisterOptions}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TransporterRegister"
                component={TransporterRegister}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AppTab1Navigator"
                component={AppTab1Navigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AppTab2Navigator"
                component={AppTab2Navigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const AppTab1Navigator = () => {
    return (
        <Tab1.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    height: 65,
                    flexDirection: 'row',
                    bottom: -10
                },
                activeTintColor: '#008764',
                inactiveTintColor: '#979698',
            }}
        >
            <Tab1.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="home" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab1.Screen
                name="ShopCart"
                component={ShopCart}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="shopping-bag" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab1.Screen
                name="ClientHistoric"
                component={ClientHistoric}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="list" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab1.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="user" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
        </Tab1.Navigator>
    );
};

const AppTab2Navigator = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    height: 65,
                    flexDirection: 'row',
                    bottom: -10
                },
                activeTintColor: '#008764',
                inactiveTintColor: '#979698',
            }}
        >
            <Tab2.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="truck" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab2.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="view-dashboard-outline" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab2.Screen
                name="TransporterHistoric"
                component={TransporterHistoric}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="list" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
            <Tab2.Screen
                name="TransporterProfile"
                component={TransporterProfile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name="user" size={22} color={focused ? '#008764' : '#979698'} />
                    )
                }}
            />
        </Tab2.Navigator>
    )
};

export default Routers;
