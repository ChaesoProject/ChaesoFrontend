import React, { useState } from "react";
import { TextInput } from "react-native";

const InputGray = ({
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
        borderColor: isFocused ? "#000" : "#F5F5F5",
        paddingLeft: 20,
        color: "#000000",
        backgroundColor: isFocused ? "#FFF": "#F5F5F5",
        fontSize: 14,
        fontFamily: isFocused ? "poppins_medium": "poppins_regular",
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

export default InputGray;
