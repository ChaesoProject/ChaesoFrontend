import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    Image,
} from "react-native";

import styles from "./styles";

export default function Dashboard({ navigation }) {

    const data = [150, 200, 145, 240]; // dados dos valores das barras
    const maxBarHeight = 150; // altura máxima das barras
    const colors = ["#FF5F5F", "#FD9739", "#C8E261", "#19BA90"];

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.title}>Dashboard de Entregas</Text>
                    <Text style={styles.subtitle}>Gabriel Santana</Text>

                    <View style={styles.containerValues}>
                        <Text style={{
                            marginBottom: -50,
                            fontFamily: 'poppins_regular',
                            color: '#808080', fontSize: 10,
                            textAlign: 'center'
                        }}>
                            Entregas nos últimos 4 meses</Text>
                        
                        <View style={{
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: "#ECECEC",
                            borderRadius: 8,
                            padding: 20,
                            paddingTop: 50,
                            gap: 15
                        }}>
                            {data.map((value, index) => (
                                <View
                                    key={index}
                                    style={{
                                        backgroundColor: colors[index % colors.length],
                                        width: 30,
                                        borderRadius: 7,
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        height: (value / Math.max(...data)) * maxBarHeight,
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontFamily: 'poppins_medium', fontSize: 12, marginBottom: 3 }}>{value}</Text>
                                </View>
                            ))}
                        </View>

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