import React, { useState } from "react";
import { TextInput } from "react-native";

const InputWhite = ({
    placeholderText,
    value,
    onChangeText,
    secureTextEntry,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputStyles = {
        width: "100%",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: isFocused ? "#000000" : "#E7E7E7",
        paddingLeft: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontSize: 14,
        fontFamily: "poppins_medium",
        marginBottom: 9,
        underlineColorAndroid: "transparent",
    };

    return (
        <TextInput
            style={inputStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            placeholderTextColor="#989898"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default InputWhite;
