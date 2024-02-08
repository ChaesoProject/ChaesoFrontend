import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

import LocalButton from "../../components/LocalButton";

import InputGray from "../../../components/InputGray";


import styles from "./styles";

export default function Register({ navigation }) {
    const register = () => {
        //navigation.navigate("MensagemCadastro");
        console.log('register pressionado')
    };

    const back = () => {
        //navigation.navigate("CadastroMenu");
        console.log('back pressionado')
    };

    const [checked, setChecked] = useState(false);

    // fields for personal data
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.containerChild}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={voltar}>
                        <Feather name="arrow-left" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.textRegular}>Cadastro Young</Text>
                    <Feather name="info" size={25} color="#fff" />
                </View>
                <ScrollView style={styles.form}>
                    <Text style={styles.textMedium}>Dados Pessoais</Text>

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

                    <CheckBox
                        title="Declaro que li, estou ciente e concordo com os Termos e Políticas de Privacidade e Segurança Young."
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                        style={styles.containerCheck}
                        checkedColor="#EEA243"
                        uncheckedColor="gray"
                    />

                    <LocalButton
                        text="Confirmar"
                        onPress={() => alert("Botão clicado!")}
                    />
                </ScrollView>
            </View>
        </View>
    );
}
