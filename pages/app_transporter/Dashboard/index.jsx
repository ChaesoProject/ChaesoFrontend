import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
    Modal,
} from "react-native";

// import { Shadow } from 'react-native-shadow-2';

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import InputWhite from "../../../components/InputWhite";
import InputGray from "../../../components/InputGray";
import ButtonGreen from "../../../components/ButtonGreen";
import styles from "./styles";

export default function Dashboard({ navigation }) {
    const [cpf, setCpf] = useState("");

    const menu = () => {
        //navigation.navigate("Home");
        console.log('menu clicado')
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.categoryTitle}>Dashboard de Entregas</Text>
                    <Text style={styles.textHeaderAdress}>Gabriel Santana</Text> {/* deverá recebe o nome do entregador */}
                    <View style={styles.cardsContainer}>
                        <Text>o conteudo do dashboard vai ficar aqui</Text>
                    </View>
                    <View style={styles.resume}>
                        <View>
                            <Text style={styles.textFinal}>Valor total</Text>
                            <Text style={styles.textPriceFinal}>R$ 30,00</Text>
                        </View>
                        {/* <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(true)}>
                            <Text style={styles.buttonText}>Finalizar</Text>
                        </TouchableOpacity> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}