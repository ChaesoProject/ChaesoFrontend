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

export default function ClientHistoric({ navigation }) {
    const menu = () => {
        //navigation.navigate("Home");
        console.log('menu clicado')
    };

    /*
    // renderização de cards
    const DATA = [
        { productName: 'Mamão', unit: '1 Kg', productPrice: '5,00', imageUrl: require('../../../assets/images/fruits/mamão.png') },
        { productName: 'Maçã', unit: '1 Kg', productPrice: '3,00', imageUrl: require('../../../assets/images/fruits/maça.png') },
        { productName: 'Uva Vitória', unit: '1 Kg', productPrice: '15,00', imageUrl: require('../../../assets/images/fruits/uva.png') },
        { productName: 'Kiwi', unit: '1 Kg', productPrice: '20,00', imageUrl: require('../../../assets/images/fruits/kiwi.png') },
    ];

    const renderItem = ({ item }) => (
        // foto, nome, preço, input de quantidade, unidade, remover item

        <View style={styles.item}>
            <Image source={item.imageUrl} style={styles.imageCard} />
            <View style={styles.columnProduct}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productPrice}>R$ {item.productPrice}</Text>
            </View>
            <View style={styles.containerQuant}>
                <Text style={styles.productUnit}>Quantidade</Text>
                <InputWhite
                    secureTextEntry={false}
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                />
            </View>
            <TouchableOpacity style={styles.buttonRemove}>
                <Feather name="trash" size={18} color="#008764" />
            </TouchableOpacity>
        </View>
    ); */

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.categoryTitle}>Meus pedidos</Text>
                    <Text style={styles.textHeaderAdress}>Resumo de todos os pedidos realizados por você</Text>
                    {/* <View style={styles.cardsContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={1}
                        />
                    </View> */}


                    <View>
                        <Text style={styles.sectionTtile}>Agora</Text>
                        <View style={styles.cardStatus}>
                            <Text style={styles.textStts}>Seu pedido está sendo preparado</Text>
                            <Text style={styles.textStts}>Seu pedido saiu para entrega e está a caminho do seu endereço</Text>
                            <Text style={styles.textStts}>Pedido entregue</Text>

                            <Image
                                style={styles.imageMap}
                                source={require('../../../assets/images/map_image.png')}
                            />

                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Confirmar entrega</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.sectionTtile2}>Histórico</Text>
                        <View style={styles.cardPedido}>
                            <Text style={styles.textDate}>Sex 12 janeiro 2024</Text>
                            <Text>Pedido concluído - n° 1234</Text>
                            <Text>
                                - 2 Kg mamão{'\n'}
                                - 2 Kg maçã{'\n'}
                                - 0,5 Kg kiwi{'\n'}
                                - 0,5 Kg uva vitória
                            </Text>
                            <View style={styles.line}></View>

                            <View style={styles.resume}>
                                <Text>Valor do pedido</Text>
                                <Text>R$ 30,50</Text>
                            </View>
                        </View>
                    </View>



                </ScrollView>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 0,
                width: '100%',
                height: 60,
                paddingHorizontal: 40,
            }}>
                <TouchableOpacity onPress={menu}>
                    <Feather name="home" size={22} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bag-handle-outline" size={24} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="sticky-note" size={24} color="#008764" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={22} color="#979698" />
                </TouchableOpacity>
            </View>
        </View>
    );
}