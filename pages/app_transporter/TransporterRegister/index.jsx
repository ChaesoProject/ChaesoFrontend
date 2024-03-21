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

export default function TransporterRegister({ navigation }) {
    const register = () => {
        //navigation.navigate("MensagemCadastro");
        console.log('register pressionado')
    };

    const back = () => {
        navigation.navigate("RegisterOptions");
    };

    const orders = () => {
        navigation.navigate("Orders");
    };

    const [checked, setChecked] = useState(false);

    // fields for personal data
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [password, setPassword] = useState("");

    // fields for transport data
    const [cnh, setCnh] = useState("");

    // fields for cnh category 
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionSelect = (option) => {
        const isSelected = selectedOptions.includes(option);
        if (isSelected) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

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

                    <Text style={styles.textTitle}>Transporte</Text>

                    <InputGray
                        placeholderText="N° CNH"
                        onChangeText={(e) => setCnh(e)}
                        value={cnh}
                    />

                    <Text style={styles.textSmall}>
                        Quais categorias você possui para dirigir?
                    </Text>

                    <View style={styles.inputContainer}>
                        {['a', 'b', 'c', 'd', 'e'].map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={[
                                    styles.option,
                                    selectedOptions.includes(option) && styles.selectedOption,
                                ]}
                                onPress={() => handleOptionSelect(option)}
                            >
                                <Text style={[styles.optionText, selectedOptions.includes(option) && styles.selectedOptionText]}>
                                    {option.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                        ))}
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
                        onPress={orders}
                        style={{ marginBottom: 30 }}
                    />
                </ScrollView>
            </View>
        </View>
    );
}
