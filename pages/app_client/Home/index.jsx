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

    const [search, setSearch] = useState("");

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
                        <Text style={styles.textHeaderName}>Olá, Manuela</Text>
                        <Text style={styles.textHeaderAdress}>R. Ana Lúcia de Lima, 146</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <Ionicons name="notifications" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.searchContainer}>
                        <View style={styles.input}>
                            <InputGray
                                placeholderText="Procure por produto"
                                onChangeText={(e) => setSearch(e)}
                                value={search}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.iconContainerGreen}>
                                <Feather name="search" size={23} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}