import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    FlatList,
} from "react-native";

// import { Shadow } from 'react-native-shadow-2';

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import InputGray from "../../../components/InputGray";
import styles from "./styles";

export default function Orders({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    const openMenu = () => {
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    }

    const shopCart = () => {
        navigation.navigate("ShopCart");
    }

    const [search, setSearch] = useState("");

    // renderização de cards
    const DATA = [
        { productName: 'Mamão', unit: '1 Kg', productPrice: '5,00', imageUrl: require('../../../assets/images/fruits/mamão.png') },
        { productName: 'Maçã', unit: '1 Kg', productPrice: '3,00', imageUrl: require('../../../assets/images/fruits/maça.png') },
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
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.iconContainer}>
                            <Feather name="menu" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.textHeaderName}>Olá, Gabriel</Text>
                        <Text style={styles.textHeaderAdress}>Entregador ativo</Text>
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
                                placeholderText="Procure por pedido"
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalProfile}>
                            <Ionicons name="person-circle-outline" size={48} color="#000" />
                            <View>
                                <Text style={styles.modalUserName}>Gabriel</Text>
                                <Text style={styles.modalUserEmail}>gabriel.gai@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.modalTexts}>
                            <Text style={styles.textNormal}>Configurações gerais</Text>
                            <Text style={styles.textNormal}>Notificações</Text>
                            <Text style={styles.textNormal}>Reportar problema</Text>
                            <Text style={styles.textNormal}>Permissões de localização</Text>
                            <Text style={styles.textLogout}>Log out</Text>
                        </View>
                        <View style={styles.appInfo}>
                            <Text style={styles.appInfoText}>CHAESO</Text>
                            <Text style={styles.appInfoText}>version 1.0.0</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnCloseModal} onPress={closeModal}>
                        <MaterialCommunityIcons name="close" size={18} color="#979698" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}