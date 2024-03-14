import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import of application common pages to create the route
import Login from './pages/common_pages/Login'
import RegisterOptions from './pages/common_pages/RegisterOptions'

import Register from "./pages/app_client/Register";
import Home from "./pages/app_client/Home";
import ShopCart from "./pages/app_client/ShopCart";
import ClientHistoric from "./pages/app_client/ClientHistoric";
import Profile from "./pages/app_client/Profile";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Routers = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // outras opções de tabBarOptions aqui
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    height: 60,
                },
                activeTintColor: '#008764',
                inactiveTintColor: '#979698',
                tabStyle: {
                    paddingTop: 18
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={22} />
                    )
                }}
            />

            <Tab.Screen
                name="ShopCart"
                component={ShopCart}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="bag-handle-outline" size={24} />
                    )
                }}
            />

            <Tab.Screen
                name="ClientHistoric"
                component={ClientHistoric}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="sticker-text-outline" size={24} />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={22} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Routers;

{/*

outras abas

<Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
<Tab.Screen name="Register" component={Register} options={{ headerShown: false }} />
<Tab.Screen name="RegisterOptions" component={RegisterOptions} options={{ headerShown: false }} />

*/}


{/* <TouchableOpacity>
                    <Feather name="home" size={22} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bag-handle-outline" size={24} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="sticker-text-outline" size={24} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person" size={22} color="#008764" />
                </TouchableOpacity> */}