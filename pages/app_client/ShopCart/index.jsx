import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

// import { Shadow } from 'react-native-shadow-2';

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import InputGray from "../../../components/InputGray";
import InputWhite from "../../../components/InputWhite";
import styles from "./styles";

export default function ShopCart({ navigation }) {
    const [cpf, setCpf] = useState("");

    const menu = () => {
        //navigation.navigate("Home");

        console.log('menu clicado')
    };

    const [search, setSearch] = useState("");

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
            <View>
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
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.categoryTitle}>Carrinho</Text>
                    <Text>Entregar em R. Ana Lúcia de Lima, 146</Text>
                    <View style={styles.cardsContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={1}
                        />
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

                // shadowColor: "#000",
                // elevation: 50

                // borderTopColor: 'black',

            }}>
                <TouchableOpacity onPress={menu}>
                    <MaterialIcons name="home-filled" size={26} color="#008764" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bag-handle-outline" size={24} color="#979698" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="sticky-note-o" size={22} color="#979698" />
                    {/* <FontAwesome name="sticky-note" size={24} color="#979698" /> */}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={22} color="#979698" />
                </TouchableOpacity>
            </View>
        </View>
    );
}