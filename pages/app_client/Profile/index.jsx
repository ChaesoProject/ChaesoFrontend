import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import InputWhite from "../../../components/InputWhite";
import ButtonGreen from "../../../components/ButtonGreen";
import styles from "./styles";

export default function Profile({ navigation }) {
    const register = () => {
        //navigation.navigate("MensagemCadastro");
        console.log('register pressionado')
    };

    const back = () => {
        navigation.navigate("RegisterOptions");
    };

    const home = () => {
        navigation.navigate("Home");
    };

    const [checked, setChecked] = useState(false);

    // nessa parte do useState tem que puxar os dados do usuário logado

    // fields for personal data
    const [name, setName] = useState("Manuela Rocha de Souza");
    const [cpf, setCpf] = useState("555.444.333-22");
    const [dateBirth, setDateBirth] = useState("28/04/2004");
    const [password, setPassword] = useState("•••••••••");

    // fields for delivery address data
    const [zipCode, setZipCode] = useState("13190-000");
    const [street, setStreet] = useState("R. Ana Lúcia de Lima");
    const [number, setNumber] = useState("500");
    const [district, setDistrict] = useState("Jardim Paulista");
    const [city, setCity] = useState("Monte Mor");
    const [fu, setFu] = useState("SP");

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <ScrollView style={styles.form}>

                    {/* aqui vai o banner */}
                    <View style={styles.bannerContainer}>
                        <View style={styles.bannerTextsContainer}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 10 }}>
                                <MaterialIcons name="security" size={18} color="#000" />
                                <Text style={styles.textBannerTitle}>Segurança</Text>
                            </View>
                            <Text style={styles.textBanner}>Para nos ajudar na segurança e melhor atendimento sempre mantenha seus <Text style={{ fontFamily: 'poppins_semibold' }}>dados atualizados.</Text></Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/woman.png")}
                            style={styles.imageB}
                        />
                    </View>

                    <Text style={styles.textTitle}>Dados Pessoais</Text>

                    <InputWhite
                        placeholderText="Nome completo"
                        onChangeText={(e) => setName(e)}
                        value={name}
                    />

                    <InputWhite
                        placeholderText="CPF"
                        onChangeText={(e) => setCpf(e)}
                        value={cpf}
                    />

                    <InputWhite
                        placeholderText="Data de nascimento"
                        onChangeText={(e) => setDateBirth(e)}
                        value={dateBirth}
                    />

                    <InputWhite
                        placeholderText="Senha"
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                        secureTextEntry={true}
                    />

                    <Text style={styles.textTitle}>Endereço para entrega</Text>

                    <InputWhite
                        placeholderText="CEP"
                        onChangeText={(e) => setZipCode(e)}
                        value={zipCode}
                    />

                    <View style={styles.inputContainer}>
                        <View style={styles.inputBigger}>
                            <InputWhite
                                placeholderText="Logradouro"
                                onChangeText={(e) => setStreet(e)}
                                value={street}
                            />
                        </View>
                        <View style={styles.inputSmaller}>
                            <InputWhite
                                placeholderText="N°"
                                onChangeText={(e) => setNumber(e)}
                                value={number}
                            />
                        </View>
                    </View>

                    <InputWhite
                        placeholderText="Bairro"
                        onChangeText={(e) => setDistrict(e)}
                        value={district}
                    />

                    <View style={styles.inputContainer}>
                        <View style={styles.inputBigger}>
                            <InputWhite
                                placeholderText="Cidade"
                                onChangeText={(e) => setCity(e)}
                                value={city}
                            />
                        </View>
                        <View style={styles.inputSmaller}>
                            <InputWhite
                                placeholderText="UF"
                                onChangeText={(e) => setFu(e)}
                                value={fu}
                            />
                        </View>
                    </View>

                    <View style={styles.buttonView}>
                        <ButtonGreen
                            title="Salvar alterações"
                            onPress={home}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
