import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import ButtonGreen from "../../../components/ButtonGreen";
import InputGray from "../../../components/InputGray";


import styles from "./styles";

export default function Home({ navigation }) {
    const menu = () => {
        //navigation.navigate("Home");

        console.log('menu clicado')
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={menu}>
                        <View style={styles.iconContainer}>
                            <Feather name="menu" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.textHeader}>header title</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <Ionicons name="notifications" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.form}>
                    <Text style={styles.textTitle}>Home</Text>
                </ScrollView>
            </View>
        </View>
    );
}