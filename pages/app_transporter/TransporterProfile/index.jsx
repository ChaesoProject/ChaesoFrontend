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

export default function TransporterProfile({ navigation }) {

    const home = () => {
        navigation.navigate("Home");
    };

    const [checked, setChecked] = useState(false);

    // nessa parte do useState tem que puxar os dados do usuário logado

    // fields for personal data
    const [name, setName] = useState("Gabriel Santana de Oliveira");
    const [cpf, setCpf] = useState("111.222.333-44");
    const [dateBirth, setDateBirth] = useState("30/05/2002");
    const [password, setPassword] = useState("•••••••••");

    // fields for transport data
    const [cnh, setCnh] = useState("0001112223");

    // fields for cnh category 
    const [selectedOptions, setSelectedOptions] = useState(['a', 'b']);

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

                    <Text style={styles.textTitle}>Transporte</Text>

                    <InputWhite
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
