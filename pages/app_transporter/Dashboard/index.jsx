import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    Image,
} from "react-native";

import styles from "./styles";

export default function Dashboard({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.title}>Dashboard de Entregas</Text>
                    <Text style={styles.subtitle}>Gabriel Santana</Text>

                    <View style={styles.containerValues}>
                        <Image
                            style={styles.imageGrafic}
                            source={require('../../../assets/images/graphic_image.png')}
                        />

                        <View style={styles.containerLastMonths}>
                            <Text style={styles.smallText1}>Total de entregas nos últimos 4 meses</Text>
                            <Text style={styles.bigText1}>765</Text>
                        </View>

                        <View style={styles.containerLastMonthsValue}>
                            <Text style={styles.smallText2}>Total do valor de entregas nos últimos 4 meses</Text>
                            <Text style={styles.bigText2}>R$ 15.350,86</Text>
                        </View>

                        <Text style={styles.titleMedium}>Dashboard Total</Text>

                        <View style={styles.containerTotalOrders}>
                            <Text style={styles.smallText3}>Total de entregas desde Janeiro de 2023</Text>
                            <Text style={styles.bigText3}>2850</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}