import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

interface InputProps extends TextInputProps {
    style?: StyleProp<TextStyle>
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
}

export function PrimaryInput({ style, placeholder, value, onChangeText, secureTextEntry, keyboardType }: InputProps) {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        width: '100%',
        borderRadius: 4,
        borderColor: '#c7c7c7',
    },
})
