import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyle from "../styles/buttonStyle";

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={buttonStyle.button} onPress={onPress}>
            <Text style={buttonStyle.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
