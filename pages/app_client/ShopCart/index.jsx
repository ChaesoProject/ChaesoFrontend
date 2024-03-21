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

export default function ShopCart({ navigation }) {
    const [cpf, setCpf] = useState("");

    const menu = () => {
        //navigation.navigate("Home");
        console.log('menu clicado')
    };

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
    );

    // teste de modais aqui

    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const abrirModal = () => {
        setModalVisible(!modalVisible);
    };

    const abrirModal2 = () => {
        setModal2Visible(true);
    };

    const handlePress = () => {
        abrirModal();
        abrirModal2();
    };

    const cancel = () => {
        setModal2Visible(false);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModal2Visible(false);
        setModalVisible(false);
    }

    // fim dos modais

    // novo endereço no modal 
    // fields for delivery address data
    const [zipCode, setZipCode] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [fu, setFu] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.categoryTitle}>Carrinho</Text>
                    <Text style={styles.textHeaderAdress}>Entregar em R. Ana Lúcia de Lima, 146</Text>
                    <View style={styles.cardsContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={1}
                        />
                    </View>
                    <View style={styles.resume}>
                        <View>
                            <Text style={styles.textFinal}>Valor total</Text>
                            <Text style={styles.textPriceFinal}>R$ 30,00</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(true)}>
                            <Text style={styles.buttonText}>Finalizar</Text>
                        </TouchableOpacity>
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
                        <Text style={styles.textModal}>A entrega será realizada em
                            <Text style={styles.bold}> R. Ana Lúcia de Lima, 146, Jardim Paulista - Monte Mor/SP</Text></Text>
                        <TouchableOpacity style={styles.buttonContainerModal}>
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerModalEdit} onPress={handlePress}>
                            <Text style={styles.buttonText2}>Editar endereço</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnClose1} onPress={closeModal}>
                        <MaterialCommunityIcons name="close" size={18} color="#979698" />
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal2Visible}
                onRequestClose={() => {
                    setModal2Visible(!modal2Visible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textTitleModal}>Novo endereço para entrega</Text>
                        <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                <InputGray
                                    placeholderText="CEP"
                                    onChangeText={(e) => setZipCode(e)}
                                    value={zipCode}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <View style={styles.inputBigger}>
                                    <InputGray
                                        placeholderText="Logradouro"
                                        onChangeText={(e) => setStreet(e)}
                                        value={street}
                                    />
                                </View>
                                <View style={styles.inputSmaller}>
                                    <InputGray
                                        placeholderText="N°"
                                        onChangeText={(e) => setNumber(e)}
                                        value={number}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <InputGray
                                    placeholderText="Bairro"
                                    onChangeText={(e) => setDistrict(e)}
                                    value={district}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <View style={styles.inputBigger}>
                                    <InputGray
                                        placeholderText="Cidade"
                                        onChangeText={(e) => setCity(e)}
                                        value={city}
                                    />
                                </View>
                                <View style={styles.inputSmaller}>
                                    <InputGray
                                        placeholderText="UF"
                                        onChangeText={(e) => setFu(e)}
                                        value={fu}
                                    />
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.buttonContainerModal}>
                            <Text style={styles.buttonText}>Salvar novo endereço</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainerModalEdit} onPress={cancel}>
                            <Text style={styles.buttonText2}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnClose} onPress={closeModal}>
                        <MaterialCommunityIcons name="close" size={18} color="#979698" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}