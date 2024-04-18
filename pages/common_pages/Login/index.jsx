import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    Alert,
} from "react-native";

import InputWhite from "../../../components/InputWhite";
import styles from "./styles";

const Login = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [cpf, setCpf] = useState("");

    const handleLogin = () => {
        // teste dos campos
        console.log("CPF:", cpf);
        console.log("Senha:", password);

        // validação do login
        if (cpf === '55544433322' && password === 'client123') {
            navigation.navigate('AppTab1Navigator', { screen: 'Home' });
        } else if (cpf === '11122233344' && password === 'transporter123') {
            navigation.navigate('AppTab2Navigator', { screen: 'Orders' });
        } else {
            Alert.alert(
                'Credenciais Inválidas',
                'Usuário e senha não foram encontrados no sistema, certifique-se de que você possui cadastro.',
                [{ text: 'OK', onPress: () => console.log('Botão OK pressionado') }],
                { cancelable: false }
              );
        }

    };

    const register = () => {
        navigation.navigate("RegisterOptions");
    };

    return (
        <ImageBackground
            source={require("../../../assets/images/doddle-veg.png")}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>chaeso</Text>
                <Image
                    source={require("../../../assets/images/logo-chaeso.png")}
                    style={styles.imageLogo}
                />
                <Text style={styles.label}>
                    Entre com seu CPF e senha para continuar
                </Text>
                <InputWhite
                    placeholderText="CPF"
                    secureTextEntry={false}
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                />

                <InputWhite
                    placeholderText="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <Text style={styles.link}>Ainda não possui uma conta?</Text>
                    <TouchableOpacity onPress={register}>
                        <Text style={styles.linkBold}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Login;
