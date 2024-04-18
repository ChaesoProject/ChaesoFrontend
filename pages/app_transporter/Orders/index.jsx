import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    FlatList,
    Alert,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import InputGray from "../../../components/InputGray";
import styles from "./styles";

export default function Orders({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [search, setSearch] = useState("");

    // função para fazer o modal de sucesso aparecer na tela e fechar sozinho após 3 segundos
    useEffect(() => {
        if (successModalVisible) {
            const timer = setTimeout(() => {
                setSuccessModalVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [successModalVisible]);
    
    const [pedidos, setPedidos] = useState([
        { orderNumber: '1234', clientName: 'Manuela Rocha', orderPrice: '30,50', status: 'Pedido pronto para entrega' },
        { orderNumber: '1235', clientName: 'Jennifer Costa', orderPrice: '30,50', status: 'Pedido pronto para entrega' },
        { orderNumber: '1236', clientName: 'João Victor', orderPrice: '30,50', status: 'Pedido pronto para entrega' },
        { orderNumber: '1237', clientName: 'Eduarda Souza', orderPrice: '30,50', status: 'Pedido a caminho' },
        { orderNumber: '1238', clientName: 'Kethelyn Machado', orderPrice: '30,50', status: 'Pedido a caminho' },
    ]);

    const openMenu = () => {
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openConfirmModal = (orderNumber) => {
        setSelectedOrder(orderNumber);
        setConfirmModalVisible(true);
    };

    const closeConfirmModal = () => {
        setConfirmModalVisible(false);
        setSelectedOrder(null);
    };

    const closeSuccessModal = () => {
        setSuccessModalVisible(false);
    };

    const shopCart = () => {
        navigation.navigate("ShopCart");
    };

    const handlePressButton = (orderNumber, newStatus) => {
        if (newStatus === 'Concluído') {
            openConfirmModal(orderNumber);
        } else {
            updateOrderStatus(orderNumber, newStatus);
        }
    };

    const updateOrderStatus = (orderNumber, newStatus) => {
        setPedidos(prevPedidos => {
            if (newStatus === 'Concluído') {
                return prevPedidos.filter(pedido => pedido.orderNumber !== orderNumber);
            } else {
                return prevPedidos.map(pedido => {
                    if (pedido.orderNumber === orderNumber) {
                        return { ...pedido, status: newStatus };
                    }
                    return pedido;
                });
            }
        });
    };

    const confirmOrderCompletion = () => {
        updateOrderStatus(selectedOrder, 'Concluído');
        closeConfirmModal();
        setSuccessModalVisible(true);
    };

    const renderItem = ({ item }) => {
        // Define o estilo e o texto do botão com base no valor do status
        let buttonLabel;
        let newStatus;
        let buttonAction;

        if (item.status === 'Pedido pronto para entrega') {
            buttonLabel = 'Entregar';
            newStatus = 'Pedido a caminho';
            buttonAction = () => handlePressButton(item.orderNumber, newStatus);
        } else {
            buttonLabel = 'Concluir';
            newStatus = 'Concluído';
            buttonAction = () => handlePressButton(item.orderNumber, newStatus);
        }

        // Define o estilo com base no valor do status
        const statusStyle = item.status === 'Pedido pronto para entrega' ? styles.status1 : styles.status2;
        const btnStatusStyle = item.status === 'Pedido pronto para entrega' ? styles.btnStatus1 : styles.btnStatus2;

        return (
            <View style={styles.item}>
                <View style={styles.containerRowCard}>
                    <View>
                        <Text style={styles.smallGray}>Pedido n° {item.orderNumber}</Text>
                        <Text style={styles.clientName}>{item.clientName}</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.smallGray}>Valor do produto</Text>
                        <Text style={styles.orderPrice}>R$ {item.orderPrice}</Text>
                    </View>
                </View>
                <View style={styles.containerRowCard}>
                    <View>
                        <Text style={styles.smallGray2}>Status atual do pedido</Text>
                        <Text style={[styles.status, statusStyle]}>
                            {item.status}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={buttonAction} style={[styles.buttonStatus, btnStatusStyle]}>
                        <Text style={styles.buttonText}>{buttonLabel}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={openMenu}>
                        <View style={styles.iconContainer}>
                            <Feather name="menu" size={24} color="#000" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.textHeaderName}>Olá, Gabriel</Text>
                        <Text style={styles.textHeaderAdress}>Entregador ativo</Text>
                    </View>
                    <TouchableOpacity onPress={shopCart}>
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
                            data={pedidos}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={1}
                        />
                        <Text style={styles.textFinal}>Fim dos pedidos :)</Text>
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={confirmModalVisible}
                onRequestClose={closeConfirmModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalConfirmView}>
                        <Text style={styles.confirmModalText}>Concluir entrega do pedido?</Text>
                        <View style={styles.confirmModalButtons}>
                            <TouchableOpacity style={styles.confirmModalButton} onPress={confirmOrderCompletion}>
                                <Text style={styles.confirmButtonText}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelModalButton} onPress={closeConfirmModal}>
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={successModalVisible}
                onRequestClose={closeSuccessModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalConfirmView}>
                    <FontAwesome6 name="circle-check" size={50} color="#00A538" />
                        <Text style={styles.succesModalText}>Entrega do pedido concluída com sucesso :)</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
