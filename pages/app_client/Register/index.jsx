import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

import ButtonGreen from "../../../components/ButtonGreen";
import InputGray from "../../../components/InputGray";


import styles from "./styles";

export default function Register({ navigation }) {
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

    // fields for personal data
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [password, setPassword] = useState("");

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
                <View style={styles.header}>
                    <TouchableOpacity onPress={back}>
                        <Feather name="arrow-left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Cadastro Chaeso</Text>
                    <Feather name="info" size={20} color="#FFF" />
                </View>
                <ScrollView style={styles.form}>
                    <Text style={styles.textTitle}>Dados Pessoais</Text>

                    <InputGray
                        placeholderText="Nome completo"
                        onChangeText={(e) => setName(e)}
                        value={name}
                    />

                    <InputGray
                        placeholderText="CPF"
                        onChangeText={(e) => setCpf(e)}
                        value={cpf}
                    />

                    <InputGray
                        placeholderText="Data de nascimento"
                        onChangeText={(e) => setDateBirth(e)}
                        value={dateBirth}
                    />

                    <InputGray
                        placeholderText="Senha"
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                        secureTextEntry={true}
                    />

                    <Text style={styles.textSmall}>
                        Sua senha deve possuir no mínimo 8 caracteres e incluir números e letras
                    </Text>

                    <Text style={styles.textTitle}>Endereço para entrega</Text>

                    <InputGray
                        placeholderText="CEP"
                        onChangeText={(e) => setZipCode(e)}
                        value={zipCode}
                    />

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

                    <InputGray
                        placeholderText="Bairro"
                        onChangeText={(e) => setDistrict(e)}
                        value={district}
                    />

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

                    <CheckBox
                        title="Declaro que li e estou de acordo com os termos de privacidade e segurança."
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                        style={styles.containerCheck}
                        checkedColor="#000"
                        uncheckedColor="000"
                    />

                    <ButtonGreen
                        title="Confirmar"
                        onPress={home}
                        style={{ marginBottom: 30 }}
                    />
                </ScrollView>
            </View>
        </View>
    );
}
