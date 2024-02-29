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
import styles from "./styles";

export default function Home({ navigation }) {
    const menu = () => {
        //navigation.navigate("Home");
        console.log('menu clicado')
    };

    const shopCart = () => {
        navigation.navigate("ShopCart");
    }

    const [search, setSearch] = useState("");

    // renderização de cards
    const DATA = [
        { productName: 'Mamão', unit: '1 Kg', productPrice: '5,00', imageUrl: require('../../../assets/images/fruits/mamão.png') },
        { productName: 'Maçã', unit: '1 Kg', productPrice: '3,00', imageUrl: require('../../../assets/images/fruits/maça.png') },
        { productName: 'Uva Vitória', unit: '1 Kg', productPrice: '15,00', imageUrl: require('../../../assets/images/fruits/uva.png') },
        { productName: 'Kiwi', unit: '1 Kg', productPrice: '20,00', imageUrl: require('../../../assets/images/fruits/kiwi.png') },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.imageUrl} style={styles.imageCard} />
            <View style={styles.rowProduct}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.unit}>{item.unit}</Text>
            </View>
            <Text style={styles.productPrice}>R$ {item.productPrice}</Text>

            <TouchableOpacity style={styles.buttonAdd}>
                <FontAwesome6 name="cart-shopping" size={18} color="#008764" />
                <Text style={styles.textAdd}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );

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
                    <Text style={styles.categoryTitle}>Categorias</Text>
                    <View style={styles.rowCategories}>
                        <TouchableOpacity style={styles.category}>
                            <FontAwesome6 name="apple-whole" size={32} color="#EB3223" />
                            <Text style={styles.categoryName}>Frutas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <FontAwesome6 name="carrot" size={32} color="#F29D38" />
                            <Text style={styles.categoryName}>Legumes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.category}>
                            <FontAwesome6 name="leaf" size={32} color="#78A55A" />
                            <Text style={styles.categoryName}>Verduras</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerContainer}>
                        <View style={styles.bannerTextsContainer}>
                            <Text style={styles.textBanner1}>10% off</Text>
                            <Text style={styles.textBanner2}>só hoje</Text>
                            <Text style={styles.textBanner3}>Delivery de <Text style={{ color: '#008764' }}>hortifruti fresco</Text> todos os dias</Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/vegetable-basket.png")}
                            style={styles.imageB}
                        />
                    </View>
                    <View style={styles.cardsContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
                        <Text style={styles.textFinal}>Fim dos produtos (;-;)</Text>
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
                <TouchableOpacity onPress={shopCart}>
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