import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";

import styles from "./styles";

const RegisterOptions = ({ navigation }) => {
    const login = () => {
        navigation.navigate("Login");
    };

    const registerClient = () => {
        navigation.navigate("Register");
    }

    const registerTransporter = () => {
        navigation.navigate("TransporterRegister");
    }

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
                    Como você deseja participar do chaeso?
                </Text>

                {/* falta colocar o onPress onPress={handleLogin}*/}
                <TouchableOpacity style={styles.button} onPress={registerClient}>
                    <Text style={styles.buttonText}>Cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={registerTransporter}>
                    <Text style={styles.buttonText}>Entregador</Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <Text style={styles.link}>Já possui uma conta?</Text>
                    <TouchableOpacity onPress={login}>
                        <Text style={styles.linkBold}> Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default RegisterOptions;
